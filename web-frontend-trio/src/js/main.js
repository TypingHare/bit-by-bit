/**
 * Retrieves an HTML element by its ID.
 *
 * @param {string} elementId - The ID of the HTML element to retrieve.
 * @returns {HTMLElement} The HTML element with the specified ID.
 * @throws Will throw an error if the element is not found.
 */
function getElement(elementId) {
  const element = document.getElementById(elementId);

  if (!element) {
    throw new Error("Element not found: " + elementId);
  }

  return element;
}

/**
 * Injects HTML code into a specified target element by its ID.
 *
 * @param {string} targetElementId - The ID of the target HTML element.
 * @param {string} htmlCode - The HTML code to be injected.
 * @throws Will throw an error if the target element is not found.
 */
function injectHtml(targetElementId, htmlCode) {
  getElement(targetElementId).innerHTML = htmlCode;
}

/**
 * Injects code as text into a specified target element by its ID.
 * @param {string} targetElementId - The ID of the target HTML element.
 * @param {string} code - The code to be injected as text.
 * @throws Will throw an error if the target element is not found.
 */
function injectCode(targetElementId, code) {
  getElement(targetElementId).textContent = code;
}

class Phase {
  /**
   * Creates an instance of the Phase class.
   *
   * @param {string} htmlCode - The HTML code for this phase.
   * @param {string} cssCode - The CSS code for this phase.
   * @param {string} jsCode - The JavaScript code for this phase.
   */
  constructor(htmlCode = "", cssCode = "", jsCode = "") {
    this.htmlCode = htmlCode;
    this.cssCode = cssCode;
    this.jsCode = jsCode;
  }
}

/**
 * Switches the application to a specified phase by injecting its HTML, CSS,
 * and JavaScript code into designated elements.
 *
 * @param {Phase} phase - The phase to switch to.
 */
function switchPhase(phase) {
  const { htmlCode, cssCode, jsCode } = phase;

  injectHtml("demo", htmlCode);

  map = {
    "code-html": htmlCode,
    "code-css": cssCode,
    "code-js": jsCode,
  };

  for (const [elementId, code] of Object.entries(map)) {
    injectCode(elementId, code);
    delete getElement(elementId).dataset.highlighted;
  }

  hljs.highlightAll();
}

const phases = [
  new Phase(),
  new Phase(CODE_HTML_1),
  new Phase(CODE_HTML_2, CODE_CSS_2),
  new Phase(CODE_HTML_3, CODE_CSS_3),
  new Phase(CODE_HTML_4, CODE_CSS_4),
  new Phase(CODE_HTML_5, CODE_CSS_5, CODE_JS_5),
];

/**
 * The current index of the phase in the phases array.
 */
let currentPhaseIndex = 0;

/**
 * Proceeds to the next phase if available.
 *
 * @throws Will throw an error if there is no next phase.
 */
function proceedToNextPhase() {
  if (currentPhaseIndex < phases.length - 1) {
    currentPhaseIndex++;
    switchPhase(phases[currentPhaseIndex]);
  } else {
    throw new Error("No more phases available.");
  }
}

/**
 * Applies a glow effect to an icon using CSS drop-shadow filters.
 *
 * @param {string} iconId - The ID of the icon element.
 * @param {string} color - The RGB color value for the glow effect (e.g.,
 *   "255, 102, 0").
 * @param {Array} renderList - An array of arrays, each containing [radiusPx,
 *   alpha] for the glow layers.
 */
function iconGlowEffect(iconId, color, renderList) {
  const icon = getElement(iconId);

  let filterValue = "";
  for (let i = 0; i < renderList.length; i++) {
    radiusPx = renderList[i][0];
    alpha = renderList[i][1];
    filterValue += `drop-shadow(0 0 ${radiusPx}px rgba(${color}, ${alpha})) `;
  }

  icon.style.filter = filterValue;
}

function removeHiddenClass(elementId) {
  getElement(elementId).classList.remove("hidden");
}

function disableSubmitButton() {
  getElement("submit-button").onclick = (e) => e.preventDefault();
}

getElement("icon-html").onclick = function () {
  if (currentPhaseIndex === 0) {
    proceedToNextPhase();
    iconGlowEffect("icon-html", "255, 102, 0", [
      [15, 0.5],
      [30, 0.7],
    ]);
    removeHiddenClass("code-block-html");
    disableSubmitButton();
  } else {
    console.warn("HTML phase is not available at this time.");
  }
};

getElement("icon-css").onclick = function () {
  if (currentPhaseIndex === 1) {
    proceedToNextPhase();
    iconGlowEffect("icon-css", "0, 153, 255", [[10, 0.5]]);
    removeHiddenClass("code-block-css");
    disableSubmitButton();
  } else if (currentPhaseIndex === 2) {
    proceedToNextPhase();
    iconGlowEffect("icon-css", "0, 153, 255", [
      [15, 0.5],
      [30, 0.7],
    ]);
    disableSubmitButton();
  } else if (currentPhaseIndex === 3) {
    proceedToNextPhase();
    iconGlowEffect("icon-css", "0, 153, 255", [
      [25, 0.7],
      [50, 0.9],
    ]);
    disableSubmitButton();
  } else {
    console.warn("CSS phase is not available at this time.");
  }
};

getElement("icon-js").onclick = function () {
  if (currentPhaseIndex === 4) {
    proceedToNextPhase();
    iconGlowEffect("icon-js", "255, 204, 0", [
      [15, 0.5],
      [30, 0.7],
    ]);

    removeHiddenClass("code-block-js");
    getElement("submit-button").onclick = function (event) {
      event.preventDefault();

      const username = getElement("username").value;
      const password = getElement("password").value;

      alert(
        "FORM SUBMITTED!\n\n" +
          `Your username is: ${username}\n` +
          `Your password is: ${password}`,
      );
    };
  }
};

document.onkeydown = function (event) {
  const key = event.key.toLowerCase();

  if (key === "backspace") {
    if (["username", "password"].includes(event.target.id)) {
      return;
    }

    event.preventDefault();
    if (currentPhaseIndex > 0) {
      switchPhase(phases[--currentPhaseIndex]);
    }
  }

  if (key === " ") {
    event.preventDefault();
    if (currentPhaseIndex < phases.length - 1) {
      switchPhase(phases[++currentPhaseIndex]);
    }
  }
};
