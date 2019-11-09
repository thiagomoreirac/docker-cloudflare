(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{210:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),a("h2",{attrs:{id:"file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#file"}},[t._v("#")]),t._v(" File")]),t._v(" "),a("p",[t._v("The configuration should be place at "),a("code",[t._v("/app/config.yaml")]),t._v(". It can be changed by defining "),a("code",[t._v("CLOUDFLARE_CONFIG")]),t._v(" in environment variables.")]),t._v(" "),a("p",[t._v("This is the minimum configuration needed.")]),t._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("auth")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("scopedToken")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" QPExdfoNLwndJPDbt4nK1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("yF1z_srC8D0m6"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("Gv_h\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("domains")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" foo.example.com\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" A\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("proxied")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("zoneId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" JBFRZWzhTKtRFWgu3X7f3YLX\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("h3",{attrs:{id:"format"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#format"}},[t._v("#")]),t._v(" Format")]),t._v(" "),a("p",[t._v("It supports YAML with "),a("code",[t._v(".yaml")]),t._v(", "),a("code",[t._v(".yml")]),t._v(" and JSON with "),a("code",[t._v(".json")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"validation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validation"}},[t._v("#")]),t._v(" Validation")]),t._v(" "),a("p",[t._v("It can be validation through "),a("a",{attrs:{href:"../config.schema.json"}},[t._v("JSON schema")]),t._v(". There are many online validators, text editor (including VS Code) and IDE supports it.")]),t._v(" "),a("h3",{attrs:{id:"details"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#details"}},[t._v("#")]),t._v(" Details")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("api")]),t._v(": Default to "),a("code",[t._v("https://api.cloudflare.com/client/v4/")]),t._v(". This is the base API url. It should not be changed.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("auth")]),t._v(": It defines authentication with API. Use one of the following:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("scopedToken")]),t._v(": APK token.")]),t._v(" "),a("li",[a("code",[t._v("email")]),t._v(": Cloudflare Email; "),a("code",[t._v("globalToken")]),t._v(": Global API key.")])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("domains")]),t._v(": List of domains to be updated.")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("name")]),t._v(": Domain name to be updated.\n"),a("code",[t._v("type")]),t._v(": DNS record type. It should be "),a("code",[t._v("A")]),t._v(" or "),a("code",[t._v("AAAA")]),t._v(".\n"),a("code",[t._v("proxied")]),t._v(": Enable Cloudflare proxied or not.\n"),a("code",[t._v("create")]),t._v(": "),a("code",[t._v("true")]),t._v(" to create record if not exists.\n"),a("code",[t._v("zoneId")]),t._v(": "),a("router-link",{attrs:{to:"/guide/cloudflare.html#zone-id"}},[t._v("Zone ID")]),t._v(" of the record.\n"),a("code",[t._v("zoneName")]),t._v(": It is not needed if "),a("code",[t._v("zoneId")]),t._v(" is set. Root domain of the domain name. It requires "),a("code",[t._v("#zone:read")]),t._v(" for API token.")],1)])]),t._v(" "),a("li",[a("p",[a("code",[t._v("ipv4")]),t._v(" & "),a("code",[t._v("ipv6")]),t._v(": List of IP echo services to be used. It support JSON and plain text response.")])])]),t._v(" "),a("p",[a("strong",[t._v("JSON response")])]),t._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" json\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//ipv4.example.com\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("fields")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" a\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" b\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"a"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"b"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"192.168.1.1"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("ul",[a("li",[a("code",[t._v("fields")]),t._v(": It is the location of IP address in the response.")])]),t._v(" "),a("p",[a("strong",[t._v("Plain text response")])]),t._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" text\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//ipv4.example.com\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h4",{attrs:{id:"full-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#full-configuration"}},[t._v("#")]),t._v(" Full configuration")]),t._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("api")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//api.cloudflare.com/client/v4/\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("auth")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("scopedToken")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" QPExdfoNLwndJPDbt4nK1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("yF1z_srC8D0m6"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("Gv_h\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("domains")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" foo.example.com\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" A\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("proxied")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("zoneId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" JBFRZWzhTKtRFWgu3X7f3YLX\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ipv4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" json\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//v4.ident.me/.json\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("fields")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" address\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" json\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//api.ipify.org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("?")]),t._v("format=json\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("fields")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ip\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ipv6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" json\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//v6.ident.me/.json\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("fields")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" address\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" json\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//api6.ipify.org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("?")]),t._v("format=json\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("fields")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ip\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br")])]),a("h2",{attrs:{id:"environment-variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#environment-variables"}},[t._v("#")]),t._v(" Environment Variables")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Configuration through environment variables is legacy support. For all the new features, you need to use configuration file.")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("If configuration file is found, environment variables are ignored.")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Parameters")]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("*ZONE")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Domain, e.g. "),a("code",[t._v("example.com")]),t._v(".")])]),t._v(" "),a("tr",[a("td",[t._v("*HOST")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("DNS record to be updated, e.g. "),a("code",[t._v("example.com")]),t._v(", "),a("code",[t._v("subdomain.example.com")]),t._v(".")])]),t._v(" "),a("tr",[a("td",[t._v("*EMAIL")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Cloudflare Email")])]),t._v(" "),a("tr",[a("td",[t._v("*API")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Cloudflare API key")])]),t._v(" "),a("tr",[a("td",[t._v("PROXY")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("Whether the record is receiving the performance and security benefits of Cloudflare. "),a("code",[t._v("true")]),t._v(" to enable; "),a("code",[t._v("false")]),t._v(" to disable.")])]),t._v(" "),a("tr",[a("td",[t._v("FORCE_CREATE")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("When set, a record will be created if one does not exist already.")])]),t._v(" "),a("tr",[a("td",[t._v("IPV6")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("When set, update IPv6 instead of IPv4.")])]),t._v(" "),a("tr",[a("td",[t._v("PUID")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("User ID used by the script.")])]),t._v(" "),a("tr",[a("td",[t._v("PGID")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Group ID used by the script.")])])])]),t._v(" "),a("p",[t._v("* These parameters are required.")])])}),[],!1,null,null,null);s.default=n.exports}}]);