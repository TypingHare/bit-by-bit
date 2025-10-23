const HTML_CODE = `
<div>
  <h2>Login</h2>
  <form action="#" method="post">
    <input type="text" name="username" placeholder="Username" required><br>
    <input type="password" name="password" placeholder="Password" required><br>
    <button type="submit">Login</button>
  </form>
</div>
`;

const HTML_WITH_CSS_CODE = `
<div class="login-container">
  <h2>Login</h2>
  <form action="#" method="post">
    <input type="text" name="username" placeholder="Username" required><br>
    <input type="password" name="password" placeholder="Password" required><br>
    <button type="submit">Login</button>
  </form>
</div>
`;

const CSS_CODE = `
.login-container {
    background: white;
    padding: 40px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    width: 300px;
    text-align: center;
  }
  .login-container h2 {
    margin-bottom: 20px;
    color: #333;
  }
  input[type="text"], input[type="password"] {
    width: 90%;
    padding: 10px;
    margin: 8px 0;
    border: 1px solid #ccc;
    border-radius: 6px;
  }
  button {
    width: 95%;
    padding: 10px;
    background-color: #2563eb;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 16px;
  }
  button:hover {
    background-color: #1d4ed8;
  }
`;

const JS_CODE = `
`;

function inject_html(target_element_id, html_code) {
  const target_element = document.getElementById(target_element_id);

  if (!target_element) {
    throw new Error("Target element not found: " + target_element_id);
  }

  target_element.innerHTML = html_code;
}

function inject_code(target_element_id, code) {
  const target_element = document.getElementById(target_element_id);

  if (!target_element) {
    throw new Error("Target element not found: " + target_element_id);
  }

  target_element.textContent = code;
}

// Inject the code snippets into the respective elements
inject_code("code-html", HTML_CODE);
inject_code("code-css", CSS_CODE);
inject_code("code-js", JS_CODE);

// Initialize the demo area with HTML code
inject_html("login-demo", HTML_CODE);

let css_effect_enabled = false;
function toggle_css_effect() {
  document.getElementById("login-demo").innerHTML = css_effect_enabled
    ? HTML_CODE
    : HTML_WITH_CSS_CODE;

  css_effect_enabled = !css_effect_enabled;
}

document.getElementById("button-toggle-css").onclick = function () {
  toggle_css_effect();
};
