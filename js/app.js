/* =========================================
   KONIBEM — APPLICATION FOUNDATION
   Version 1.0
========================================= */

"use strict";

/**
 * KONIBEM – Grundfunktionen der Website.
 *
 * Die eigentlichen Spiele und Übersetzungen
 * werden in späteren Entwicklungsschritten ergänzt.
 */

const KONIBEM = {
    version: "1.0.0",

    supportedLanguages: ["fr", "tem", "ewe", "de", "en"],

    defaultLanguage: "fr",

    storageKeys: {
        language: "konibem_language"
    }
};

/**
 * Aktualisiert die Jahreszahl im Footer.
 */
function updateCopyrightYear() {
    const yearElement = document.getElementById("current-year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

/**
 * Ermittelt die gespeicherte Sprache.
 */
function getSavedLanguage() {
    try {
        const savedLanguage = localStorage.getItem(
            KONIBEM.storageKeys.language
        );

        if (KONIBEM.supportedLanguages.includes(savedLanguage)) {
            return savedLanguage;
        }
    } catch (error) {
        console.warn("KONIBEM: Sprache konnte nicht geladen werden.");
    }

    return KONIBEM.defaultLanguage;
}

/**
 * Speichert die ausgewählte Sprache.
 *
 * Hinweis:
 * Die Speicherung funktioniert bereits.
 * Die Übersetzung der Website wird später ergänzt.
 */
function saveLanguage(language) {
    if (!KONIBEM.supportedLanguages.includes(language)) {
        return;
    }

    try {
        localStorage.setItem(
            KONIBEM.storageKeys.language,
            language
        );
    } catch (error) {
        console.warn("KONIBEM: Sprache konnte nicht gespeichert werden.");
    }
}

/**
 * Richtet die Sprachauswahl ein.
 */
function initializeLanguageSelector() {
    const selector = document.getElementById("language-selector");

    if (!selector) {
        return;
    }

    selector.value = getSavedLanguage();

    selector.addEventListener("change", function () {
        saveLanguage(selector.value);

        console.info(
            "KONIBEM: Sprachauswahl gespeichert:",
            selector.value
        );
    });
}

/**
 * Startet die Grundfunktionen der Website.
 */
function initializeKONIBEM() {
    updateCopyrightYear();
    initializeLanguageSelector();

    console.info(
        `KONIBEM ${KONIBEM.version} initialisiert.`
    );
}

document.addEventListener("DOMContentLoaded", initializeKONIBEM);
