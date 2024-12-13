function handleLogin(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'admin' && password === '1234') {
      // Mostrar contenido para admin
      document.getElementById('loginForm').style.display = 'none';
      document.getElementById('mainContent').style.display = 'none';
      document.getElementById('admin-section').style.display = 'block';
  } else if (username === 'recep' && password === '4321') {
      // Mostrar contenido para recepcionista
      document.getElementById('loginForm').style.display = 'none';
      document.getElementById('mainContent').style.display = 'block';
      document.getElementById('admin-section').style.display = 'none';
  } else {
      // Mostrar error 404
      showError('404');
  }
}

function logout() {
  // Resetear vistas al estado inicial
  document.getElementById('loginForm').style.display = 'block';
  document.getElementById('mainContent').style.display = 'none';
  document.getElementById('admin-section').style.display = 'none';
  
  // Limpiar campos de formulario
  clearFormFields();
}

function showError(type) {
  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('mainContent').style.display = 'none';
  document.getElementById('error404').style.display = type ==='404' ? 'block' : 'none';
  document.getElementById('error500').style.display = type === '500' ? 'block' : 'none';
  document.getElementById('admin-section').style.display = 'none';
  }
  
  function goBack() {
    // Ocultar errores y volver al login
    document.getElementById('error404').style.display = 'none';
    document.getElementById('error500').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
  }

  function retry() {
    // Simula un reintento (puedes personalizarlo según tus necesidades)
    alert('Reintentando...');
    location.reload();
  }

  if (type === '404') {
      document.getElementById('error404').style.display = 'block';
  } else if (type === '500') {
      document.getElementById('error500').style.display = 'block';
  }


function clearFormFields() {
  // Limpiar campos de texto
  document.querySelectorAll('input').forEach(input => input.value = '');
  document.querySelectorAll('textarea').forEach(textarea => textarea.value = '');
}

function logout() {
  // Muestra el formulario de login y oculta el contenido principal
  document.getElementById('mainContent').style.display = 'none';
  document.getElementById('loginForm').style.display = 'block';
}