from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
import json
from urllib.parse import parse_qs
from time import sleep

def burger_builder_view(request):
    return render(request, 'burger_builder_main.html')

@csrf_exempt
def print_details(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        
        total_price = data['total_price']
        layers  = data['layers']
        print_str = ''
        for layer in layers:
            print_str += layer['name'] + ' ' + str(layer['value']) + '\n'
        
        print_str += 'Total Price: ' + str(total_price)
        print(print_str)
        
        sleep(5)

        return JsonResponse({'success': True})
    