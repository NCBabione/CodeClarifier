from openai import OpenAI
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json
from django.conf import settings

client = OpenAI(api_key=settings.OPENAI_API_KEY)

recent_interactions = []
MAX_INTERACTIONS = 50

@csrf_exempt
def parseCode(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            input_code = data.get('code', '')

            if not input_code:
                return JsonResponse({'error': 'No code provided.'}, status=400)

            response = client.chat.completions.create(
                model="gpt-3.5-turbo",
                messages=[
                    {"role": "system", "content": "You are a code analysis assistant. Analyze the provided code and explain what it does line by line."},
                    {"role": "user", "content": f"Please analyze this code and explain what it does:\n\n{input_code}"}
                ]
            )

            ai_response = response.choices[0].message.content
            
            # Store the interaction
            recent_interactions.insert(0, {
                'input': input_code,
                'output': ai_response
            })
            
            if len(recent_interactions) > MAX_INTERACTIONS:
                recent_interactions.pop()

            return JsonResponse({'ai_response': ai_response})

        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
    
    elif request.method == 'GET':
        html_content = """
        <html>
        <head>
            <style>
                table { 
                    width: 100%;
                    border-collapse: collapse;
                    margin: 20px 0;
                    font-family: Arial, sans-serif;
                }
                th, td {
                    border: 1px solid #ddd;
                    padding: 12px;
                    text-align: left;
                }
                th {
                    background-color: #f5f5f5;
                }
                tr:nth-child(even) {
                    background-color: #fafafa;
                }
                pre {
                    white-space: pre-wrap;
                    margin: 0;
                }
            </style>
        </head>
        <body>
            <table>
                <tr>
                    <th>Input Code</th>
                    <th>API Response</th>
                </tr>
        """
        
        for interaction in recent_interactions:
            html_content += f"""
                <tr>
                    <td><pre>{interaction['input']}</pre></td>
                    <td><pre>{interaction['output']}</pre></td>
                </tr>
            """

        html_content += """
            </table>
        </body>
        </html>
        """
        
        return HttpResponse(html_content)

    return JsonResponse({'error': 'Invalid request method. Use POST.'}, status=400)