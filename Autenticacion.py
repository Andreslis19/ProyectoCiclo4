import os
from flask import Flask
from flask import request
from twilio.rest import Client
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

app=Flask(__name__)

@app.route("/")
def inicio():
    prueba = os.environ.get("EJEMPLO")
    return prueba

@app.route("/sms")
def sms():
    try:
        account_sid = os.environ["TWILIO_ACCOUNT_SID"]
        auth_token = os.environ["TWILIO_ACCOUNT_TOKEN"]
        client = Client(account_sid, auth_token)
        
        destino = request.args.get("telefono")
        contenido = request.args.get("mensaje")
        
        message = client.messages \
            .create(
                body = contenido,
                from_ = "+18647324688",
                to = "+57"+destino
            )
        
        print(message.sid)
        return "El mensaje se envió exitosamente"
    
    except Exception as e:
        return "No se pudo enviar el sms"
    
@app.route("/email")
def correo():
    
    destino = request.args.get("correo")
    asunto = request.args.get("asunto")
    mensaje = request.args.get("mensaje")
    
    message = Mail(
        from_email = "tictecnovent@gmail.com",
        to_emails = destino,
        subject =asunto,
        html_content = mensaje)
    
    try:
        sg = SendGridAPIClient(os.environ["SENDGRID_API_KEY"])
        response = sg.send(message)
        print(response.status_code)
        print(response.body)
        print(response.headers)
        return "El correo se envió correctamente"
    
    except Exception as e:
        print(e.message)
        return "No se pudo enviar el correo"

if __name__ == "__main__":
    app.run()