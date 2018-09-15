module.exports = {
  extends: [
    "standard",
    "plugin:vue/base"
  ],
  "rules": {
    "semi": [2, "always"],
    "indent": [2, "tab",{ "SwitchCase": 1 }],
		"no-tabs": 0,
		"vue/html-indent": ["error", "tab", {
	    "attribute": 1,
	    "closeBracket": 0,
	    "alignAttributesVertically": true,
	    "ignores": []
	  }],
	  "vue/max-attributes-per-line": [2, {
	    "singleline": 10,
	    "multiline": {
	      "max": 1,
	      "allowFirstLine": false
	    }
	  }],
	  "vetur.validation.template": 0
  },
};