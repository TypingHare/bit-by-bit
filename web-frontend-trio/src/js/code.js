const CODE_HTML_1 = `
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

    <button id="submit-button">LOGIN</button>
  </form>
</div>
`;

const CODE_HTML_2 = `
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

    <button id="submit-button">LOGIN</button>
  </form>
</div>
`;

const CODE_CSS_2 = `
.login-container {
  width: 400px;
  margin: auto;
  margin-top: 5em;
  transition: width 0.3s ease-in-out;
}

.login-container h1 {
  margin: 0 0 28px;
  text-align: center;
  font-size: clamp(22px, 3.4vw, 34px);
  letter-spacing: 0.3px;
}

.login-container .field {
  position: relative;
  margin: 18px 0 8px;
}
`;

const CODE_HTML_3 = `
<div class="login-container modern-form">
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

    <button id="submit-button">LOGIN</button>
  </form>
</div>
`;

const CODE_CSS_3 = `
.modern-form .field label {
  display: block;
  font-size: 14px;
  margin-bottom: 10px;
  color: #333;
}

.modern-form .input {
  width: 100%;
  border: 0;
  border-bottom: 1.8px solid var(--line);
  padding: 6px 2px 10px 6px; /* left pad for icon */
  outline: none;
  font-size: 16px;
  color: #222;
  background: transparent;
}

.modern-form .input::placeholder {
  color: #c4c7cc;
}

.modern-form .input:focus {
  border-bottom-color: #b9c1ff;
}

.modern-form .row {
  display: flex;
  justify-content: flex-end;
  gap: 14px;
  margin: 10px 0 22px;
}

.modern-form .link {
  font-size: 14px;
  color: #6b6f76;
  text-decoration: none;
}

.modern-form .link:hover {
  text-decoration: underline;
}

.login-container {
  width: 400px;
  margin: auto;
  margin-top: 5em;
  transition: width 0.3s ease-in-out;
}

.login-container h1 {
  margin: 0 0 28px;
  text-align: center;
  font-size: clamp(22px, 3.4vw, 34px);
  letter-spacing: 0.3px;
}

.login-container .field {
  position: relative;
  margin: 18px 0 8px;
}
`;

const CODE_HTML_4 = `
<div class="login-container modern-form fancy-button">
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

    <button id="submit-button">LOGIN</button>
  </form>
</div>
`;

const CODE_CSS_4 = `
.fancy-button .btn {
  display: block;
  width: 100%;
  padding: 14px 18px;
  border-radius: 999px;
  border: 0;
  color: #fff;
  font-weight: 700;
  letter-spacing: 0.6px;
  background: linear-gradient(90deg, var(--btn-grad-a), var(--btn-grad-b));
  cursor: pointer;
  transition: filter 0.16s ease;
}

.fancy-button .btn:hover {
  filter: brightness(1.05);
}

.fancy-button .btn:active {
  transform: translateY(1px);
}

.modern-form .field label {
  display: block;
  font-size: 14px;
  margin-bottom: 10px;
  color: #333;
}

.modern-form .input {
  width: 100%;
  border: 0;
  border-bottom: 1.8px solid var(--line);
  padding: 6px 2px 10px 6px; /* left pad for icon */
  outline: none;
  font-size: 16px;
  color: #222;
  background: transparent;
}

.modern-form .input::placeholder {
  color: #c4c7cc;
}

.modern-form .input:focus {
  border-bottom-color: #b9c1ff;
}

.modern-form .row {
  display: flex;
  justify-content: flex-end;
  gap: 14px;
  margin: 10px 0 22px;
}

.modern-form .link {
  font-size: 14px;
  color: #6b6f76;
  text-decoration: none;
}

.modern-form .link:hover {
  text-decoration: underline;
}

.login-container {
  width: 400px;
  margin: auto;
  margin-top: 5em;
  transition: width 0.3s ease-in-out;
}

.login-container h1 {
  margin: 0 0 28px;
  text-align: center;
  font-size: clamp(22px, 3.4vw, 34px);
  letter-spacing: 0.3px;
}

.login-container .field {
  position: relative;
  margin: 18px 0 8px;
}
`;

const CODE_HTML_5 = CODE_HTML_4;
const CODE_CSS_5 = CODE_CSS_4;

const CODE_JS_5 = `
getElement("submit-button").onclick = function (event) {
  event.preventDefault();

  const username = getElement("username").value;
  const password = getElement("password").value;
  alert(
    "FORM SUBMITTED!\\n\\n" +
      \`Your username is: \${username}\\n\` +
      \`Your password is: \${password}\`,
  );
};
`;
