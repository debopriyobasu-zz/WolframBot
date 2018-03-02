from src import app
from urllib.parse import urlparse, urlencode
from urllib.request import urlopen, Request
from urllib.error import HTTPError
import json
import requests
from flask import request
from flask import make_response, jsonify


@app.route("/")
def home():
    return "Hello World!"

@app.route('/webhook', methods=['GET','POST'])
def webhook():
    if request.method == 'GET':
        return "webhook page"
    else:
        req = request.get_json(silent=True, force=True)

        print("Request:")
        dat = req['result']['parameters'].get('text')
        print(dat)

        res = process_req(req)
        resq = json.dumps(res)

        print(resq)
        return resq

def process_req(req):
    action = req.get('result').get('action')
    print(action)
    if action == "query":
        qry = req['result']['parameters'].get('text')
        print(qry)
        res = wa_search(qry)
        return res
    else:
        return {
            "speech" : "error",
            "displayText" : "error",
            "data": {},
            "contextOut": [],
            "source": "wolfram_alpha_bot"
        }


def wa_search(query):
    url = 'http://api.wolframalpha.com/v1/result?appid=UJKYEW-YKL88PHUER'
    srch = ''.join(query)
    srch_str = srch.replace(' ','+')
    print(srch_str)
    final_url = url + "&i=" + srch_str + "%3f"

    # obtain response from Wolfram Alpha

    obj = requests.get(final_url)
    data = obj.text

    print(data)

    # return response in form understandable by bot
    return {
        "speech" : data,
        "displayText" : data,
        "data" : {},
        "contextOut" : [],
        "source" : "wolfram_alpha_bot"
    }


if __name__ == '__main__':
    app.run()