(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{358:function(e,t,a){"use strict";a.r(t);var s=a(42),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"advanced-data-layouts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#advanced-data-layouts"}},[e._v("#")]),e._v(" Advanced Data Layouts")]),e._v(" "),a("p",[e._v("Advanced Data Layouts (or just Advanced Layouts, or ADLs for short) are a kind of plugin system for IPLD\nwhich is used when we want to present some data as if it were a [[Data Model]] [[Node]],\nwhile actually storing it as a different [[Node]] (or as several [[Node]]s!).")]),e._v(" "),a("p",[e._v("This is easiest to understand by example:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("// sharded map example")])]),e._v(" "),a("li",[a("p",[e._v("// sharded bytes example")])]),e._v(" "),a("li",[a("p",[e._v("// encryption example")])])]),e._v(" "),a("h2",{attrs:{id:"where-do-adls-fit-in"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#where-do-adls-fit-in"}},[e._v("#")]),e._v(" Where do ADLs fit in?")]),e._v(" "),a("p",[e._v("You should probably read the doc about the "),a("RouterLink",{attrs:{to:"/docs/data-model.html"}},[e._v("Data Model")]),e._v(" first, if you haven't already.\nADLs build upon the concepts that are introduced standardized by the Data Model.")],1),e._v(" "),a("ul",[a("li",[e._v("ADLs convert "),a("RouterLink",{attrs:{to:"/docs/data-model.html#node"}},[e._v("Data Model nodes")]),e._v(" into "),a("em",[e._v("another node")]),e._v("\n(or, when writing new data, provide an interface to go the other way: let the user act like they're creating a node, but in the background create several nodes, or a different structure, which stores that data).")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/docs/codecs.html"}},[e._v("Codecs")]),e._v(' and ADLs compose smoothly -- Codecs can deserialize and serialize the Data Model data that is the "raw" "interior" content of an ADL.')],1),e._v(" "),a("li",[a("a",{attrs:{href:"https://specs.ipld.io/schemas/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Schemas"),a("OutboundLink")],1),e._v(" technically have nothing to do with ADLs...\n"),a("ul",[a("li",[e._v("but, Schemas can be useful for "),a("em",[e._v("signaling")]),e._v(" when ADLs should be used to handle data ("),a("a",{attrs:{href:"#signaling-with-schemas"}},[e._v("more on that later")]),e._v(");")]),e._v(" "),a("li",[e._v("and in practice, ADL specifications often include a Schema which describes them, simply for clarity (and ADL implementations might choose use that Schema in their internal code, too).")])])]),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/docs/traversal.html"}},[e._v("Traversals")]),e._v(" and "),a("RouterLink",{attrs:{to:"/docs/pathing.html"}},[e._v("pathing")]),e._v(" work transparently over ADLs (which is part of why ADLs exist and what makes them awesome in the first place)!")],1)]),e._v(" "),a("h2",{attrs:{id:"how-adls-work"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-adls-work"}},[e._v("#")]),e._v(" How ADLs Work")]),e._v(" "),a("h3",{attrs:{id:"adls-make-nodes-look-like-another-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adls-make-nodes-look-like-another-node"}},[e._v("#")]),e._v(" ADLs make nodes look like another node")]),e._v(" "),a("p",[e._v("// emphasis on "),a("em",[e._v("one")]),e._v(" node as the result: whether it be map or list or bytes or etc, "),a("em",[e._v("one")]),e._v(".")]),e._v(" "),a("p",[e._v("// n.b. [..concrete example of what kind of transformation you'd be better off doing with schemas..]")]),e._v(" "),a("h3",{attrs:{id:"adl-interior-data-is-still-data-model"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adl-interior-data-is-still-data-model"}},[e._v("#")]),e._v(" ADL interior data is still Data Model")]),e._v(" "),a("p",[e._v("// clarify that without ADL code activated, the raw data can still be read and even traversed... just differently.")]),e._v(" "),a("p",[e._v("// clarify that codecs and ADLs compose, there's a clear layering there.")]),e._v(" "),a("h3",{attrs:{id:"adls-use-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adls-use-code"}},[e._v("#")]),e._v(" ADLs use code")]),e._v(" "),a("p",[e._v("ADLs use code, and some sort of plugin system is needed in IPLD libraries to support this.")]),e._v(" "),a("p",[e._v("How exactly those plugin systems work, and what kind of format the code needs to be authored in,\nand exactly what interfaces need to be adhered to:\nthese will all vary per IPLD library and the language the IPLD library is in.")]),e._v(" "),a("p",[e._v("(Someday, a system for portable ADL code would be neat.\nHowever, we currently consider that a research problem:\nsome notes can be found in "),a("RouterLink",{attrs:{to:"/docs/open-research/ADLs-we-can-autoexecute.html"}},[e._v("open-research/ADLs-we-can-autoexecute")]),e._v(".)")],1),e._v(" "),a("h3",{attrs:{id:"how-do-i-know-when-to-use-an-adl-to-read-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-know-when-to-use-an-adl-to-read-data"}},[e._v("#")]),e._v(" How do I know when to use an ADL to read data?")]),e._v(" "),a("p",[e._v('We call this "the signaling problem".')]),e._v(" "),a("p",[e._v("In a word: you don't.")]),e._v(" "),a("p",[e._v('Since the data composing the "raw", interior data of an ADL is just regular IPLD Data Model\n(it must be, after all, since it\'s produced by some '),a("RouterLink",{attrs:{to:"/docs/codec.html"}},[e._v("Codec")]),e._v(", which by definition produces data structures describable by the Data Model),\nthen it follows that there's absolutely no way for this data to unambiguously indicate that it needs an ADL in order to be understood.\nIf there was, it would imply that there's some kind of \"reserved words\" in the Data Model,\nwhich would violate some of our other central goals in IPLD, because it would mean some perfectly normal maps and lists would be invalid IPLD or gain magical meaning that they shouldn't;\nwe don't want any of that.")],1),e._v(" "),a("p",[e._v("So!  Signaling must come from somewhere else.")]),e._v(" "),a("p",[e._v("There are a variety of valid options:")]),e._v(" "),a("h4",{attrs:{id:"signaling-with-schemas"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#signaling-with-schemas"}},[e._v("#")]),e._v(" Signaling with Schemas")]),e._v(" "),a("p",[e._v("One useful system we have which can provide an answer to the signaling question are IPLD Schemas.\nSince Schemas are already a declarative way to talk about the structure of data,\nit's quite reasonable that they should also be able to talk about where the structure of data uses an ADL.")]),e._v(" "),a("p",[e._v("However, you don't have to use IPLD Schemas if you want to use ADLs.\nKeep reading the next couple of sections for more alternatives that you can use to answer the signaling question.")]),e._v(" "),a("p",[e._v("// TODO a doc on this, complete with syntax examples, is necessary.")]),e._v(" "),a("p",[e._v("// a remark should be present here on the interesting limitation about "),a("em",[e._v("non")]),e._v("-recursive descriptions being somewhat high-friction to reach with this mechanism.\n//  maybe this belongs in a separate deeper-diving doc in another page, though.")]),e._v(" "),a("h4",{attrs:{id:"direct-action-within-libraries"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#direct-action-within-libraries"}},[e._v("#")]),e._v(" Direct action within libraries")]),e._v(" "),a("h4",{attrs:{id:"other-declarative-signaling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#other-declarative-signaling"}},[e._v("#")]),e._v(" Other declarative signaling")]),e._v(" "),a("p",[e._v("We have no currently active specifications for other forms of declarative signaling.")]),e._v(" "),a("p",[e._v("However, you can imagine making such a system yourself fairly easily:\nall that's necessary is to decide what that declarative format is that you want,\nand write a system that binds it to the relevant programmatic APIs of the IPLD libraries you use,\nand everything should work out from there.")]),e._v(" "),a("p",[e._v("Additional declarative signaling specifications may be something that is ratified into IPLD in the future.\n(If you'd like to drive this work, please feel free to get in touch!)")]),e._v(" "),a("p",[e._v('(Some systems have already done this in their own ways: for example,\nparts of the Filecoin Lotus project expose "paths" in their CLI which have an extension\nthat is used in that application to signal where to engage ADLs.\nYou can do things like this in your own applications, too!\nIt\'s worth noting, however, that what the Filecoin Lotus project does here is not considered a well-specified IPLD behavior,\nand in fact contains several caveats which constrains what is valid data for that application to process to a range that is far narrower than what the IPLD Data Model specifies.)')]),e._v(" "),a("h2",{attrs:{id:"practical-considerations-for-adls-and-using-them"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#practical-considerations-for-adls-and-using-them"}},[e._v("#")]),e._v(" Practical Considerations for ADLs and using them")]),e._v(" "),a("h3",{attrs:{id:"not-every-application-that-processes-ipld-data-will-necessarily-support-your-adls"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#not-every-application-that-processes-ipld-data-will-necessarily-support-your-adls"}},[e._v("#")]),e._v(" not every application that processes IPLD data will necessarily support your ADLs")]),e._v(" "),a("p",[e._v('// "running foreign code on somebody else\'s budget" is not something that happens at unbounded scale on public services')]),e._v(" "),a("p",[e._v("// availability in many languages/libraries, and authorship/maint effort implied -- it's better to use community-common things if you can\n// similar to codecs in this regard")]),e._v(" "),a("p",[e._v("// reminder that schemas "),a("em",[e._v("are")]),e._v(" usable on public infra (like e.g. on hosted IPLD Explorer tools), because they have predictable computation cost envelopes -- reminder to prefer doing things with a schema rather than an ADL if you can; don't reach for ADLs just because you want a funky fresh custom format")])])}),[],!1,null,null,null);t.default=o.exports}}]);