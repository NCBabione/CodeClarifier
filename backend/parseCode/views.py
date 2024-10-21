import openai
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from django.conf import settings

openai.api_key = settings.OPENAI_API_KEY

@csrf_exempt
def parseCode(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        inputCode = data.get('code', '')

        if not inputCode:
            return JsonResponse({'error': 'No input text provided.'}, status=400)

        try:
            response = openai.completions.create(
            model="gpt-3.5-turbo-instruct",
            prompt=str(f'You are given a code snippet, explain what it does and what the errors are. Here is the code snippet: {inputCode}'),
            max_tokens=1500,
          )

            ai_response = response.choices[0].text.strip()

            return JsonResponse({'ai_response': ai_response})

        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)

    return JsonResponse({'error': 'Invalid request method. Use POST.'}, status=400)
