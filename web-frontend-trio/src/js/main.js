const CODE_HTML_0 = `
<div>
  <h1>Login</h1>
  <form>
    <div class="field">
      <label for="username">Username</label>
      <input 
        class="input" 
        id="username"
        name="username"
        placeholder="Type your username"
      />
    </div>

    <div class="field">
      <label for="password">Password</label>
      <input class="input" id="password" name="password" type="password"
             placeholder="Type your password" />
    </div>

    <div class="row">
      <a class="link" href="#" aria-label="Forgot password">Forgot password?</a>
    </div>

    <button id="submit-button" class="btn">LOGIN</button>
  </form>
</div>
`;

const CODE_HTML_1 = `
<div class="login-container">
  <h1>Login</h1>
  <form>
    <div class="field">
      <label for="username">Username</label>
      <input 
        class="input" 
        id="username"
        name="username"
        placeholder="Type your username"
      />
    </div>

    <div class="field">
      <label for="password">Password</label>
      <input class="input" id="password" name="password" type="password"
             placeholder="Type your password" />
    </div>

    <div class="row">
      <a class="link" href="#" aria-label="Forgot password">Forgot password?</a>
    </div>

    <button id="submit-button" class="btn">LOGIN</button>
  </form>
</div>
`;

const CODE_HTML_2 = `
<div class="login-container rounded-corners">
  <h1>Login</h1>
  <form>
    <div class="field">
      <label for="username">Username</label>
      <input 
        class="input" 
        id="username"
        name="username"
        placeholder="Type your username"
      />
    </div>

    <div class="field">
      <label for="password">Password</label>
      <input class="input" id="password" name="password" type="password"
             placeholder="Type your password" />
    </div>

    <div class="row">
      <a class="link" href="#" aria-label="Forgot password">Forgot password?</a>
    </div>

    <button class="btn">LOGIN</button>
  </form>
</div>
`;

const CODE_HTML_3 = `
<div class="login-container rounded-corners colorful">
  <h1>Login</h1>
  <form>
    <div class="field">
      <label for="username">Username</label>
      <input 
        class="input" 
        id="username"
        name="username"
        placeholder="Type your username"
      />
    </div>

    <div class="field">
      <label for="password">Password</label>
      <input class="input" id="password" name="password" type="password"
             placeholder="Type your password" />
    </div>

    <div class="row">
      <a class="link" href="#" aria-label="Forgot password">Forgot password?</a>
    </div>

    <button class="btn">LOGIN</button>
  </form>
</div>
`;

const CSS_CODE = `
h1 {
  margin:0 0 28px;
  text-align:center;
  font-size:clamp(22px, 3.4vw, 34px);
  letter-spacing:.3px;
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

/**
 * Injects the demo code into the respective HTML elements.
 * @param {string} phase - The phase of the demo, which can be:
 *   - "show-html": Show the HTML code.
 *   - "center-elements": Center the elements using CSS.
 */
function update_demo(phase) {
  switch (phase) {
    case phases[1]:
      inject_html("login-demo", CODE_HTML_0);
      inject_code("code-html", CODE_HTML_0);
      break;
    case phases[2]:
      inject_html("login-demo", CODE_HTML_1);
      inject_code("code-html", CODE_HTML_1);
      break;
    case phases[3]:
      inject_html("login-demo", CODE_HTML_2);
      inject_code("code-html", CODE_HTML_2);
      break;
    case phases[4]:
      inject_html("login-demo", CODE_HTML_3);
      inject_code("code-html", CODE_HTML_3);
      break;
  }
}

let current_phase_index = 0;
const phases = ["nothing", "show-html", "center-elements", "rounded-corners"];

document.getElementById("icon-html").onclick = function () {
  if (current_phase_index == 0) {
    update_demo(phases[1]);
    current_phase_index = 1;

    document.getElementById("submit-button").onclick = function (e) {
      e.preventDefault();
    };

    const icon = document.getElementById("icon-html");
    icon.style.filter =
      "drop-shadow(0 0 20px rgba(255, 102, 0, 0.9)) drop-shadow(0 0 50px rgba(255, 102, 0, 0.8))";
  }
};

document.getElementById("icon-css").onclick = function () {
  if (current_phase_index == 1) {
    update_demo(phases[2]);
    current_phase_index = 2;
    const icon = document.getElementById("icon-css");
    icon.style.filter = "drop-shadow(0 0 20px rgba(0, 153, 255, 0.8))";
  } else if (current_phase_index == 2) {
    update_demo(phases[3]);
    current_phase_index = 3;
    const icon = document.getElementById("icon-css");
    icon.style.filter =
      "drop-shadow(0 0 20px rgba(0, 153, 255, 0.7)) drop-shadow(0 0 35px rgba(0, 153, 255, 0.7))";
  } else if (current_phase_index == 3) {
    update_demo(phases[4]);
    current_phase_index = 4;
    const icon = document.getElementById("icon-css");
    icon.style.filter =
      "drop-shadow(0 0 20px rgba(0, 153, 255, 0.7)) drop-shadow(0 0 60px rgba(0, 153, 255, 0.7))";
  }
};
