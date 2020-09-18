(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{356:function(t,e,a){"use strict";a.r(e);var r=a(42),n=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"interplanetary-linked-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interplanetary-linked-data"}},[t._v("#")]),t._v(" InterPlanetary Linked Data")]),t._v(" "),a("p",[t._v("Welcome to the internet of data structures!")]),t._v(" "),a("h2",{attrs:{id:"what-is-ipld"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-ipld"}},[t._v("#")]),t._v(" What is IPLD?")]),t._v(" "),a("p",[t._v("IPLD isn't a project or a library, it's an ecosystem. An\necosystem of formats and data structures for building\napplications that can be fully decentralized.")]),t._v(" "),a("p",[t._v("This ecosystem is held together by a few concepts and\nstandards that ensure compatibility between formats\nand programming languages.")]),t._v(" "),a("p",[t._v("You'll find numerous libraries for working with IPLD.\nYou may even create a few of your own. That library is\npart of the IPLD ecosystem and you're now a part of its\ncommunity. You don't need to be a committer in a repository\nin the IPLD GitHub org to be a part of this community,\nyou're already almost there just by reading this far.")]),t._v(" "),a("h2",{attrs:{id:"from-data-to-data-structures"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#from-data-to-data-structures"}},[t._v("#")]),t._v(" From Data to Data Structures")]),t._v(" "),a("p",[t._v("Hashes are wonderful.")]),t._v(" "),a("p",[t._v("If you hash something you can give that hash to anyone else\nin the world, anywhere in the galaxy (IP stands for InterPlanetary),\nthey can tell if they have that data and when they send\nit to you, you're able to verify it was the right data even\nwithout trusting that person.")]),t._v(" "),a("p",[t._v("If you think of hashes like URLs, you can pass them around and\nask people for them without fixing the place where that data exists\ninto the link the way you do with a URL. This is really powerful,\nbut by itself it's a bit limited.")]),t._v(" "),a("p",[t._v("For one thing, there are lots of hash algorithms, and they keep\ngetting better. A hash doesn't say "),a("em",[t._v("what")]),t._v(" sort of hash it is. We\nsolved that with something called "),a("a",{attrs:{href:"https://github.com/multiformats/multihash",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("multihash")]),a("OutboundLink")],1),t._v('\nwhich is just a hash that says "I\'m a hash of this particular\nalgorithm."')]),t._v(" "),a("p",[t._v('So now, with multihash, a single identifier can get us any set\nof binary data (what we all a "Block") from anywhere in the world.')]),t._v(" "),a("p",[t._v("That's "),a("em",[t._v("data")]),t._v(", we've got that covered, but now we need to go from\n"),a("em",[t._v("data")]),t._v(" to "),a("strong",[t._v("data structures")]),t._v(".")]),t._v(" "),a("p",[t._v("This means that we have to think about different formats (JSON, CBOR,\nBitcoin, Ethereum, etc) and we also need to think about different\nprogramming languages (JavaScript, Go, Rust, etc) because these\nlanguages have different basic types that are used to represent data\nstructures in-memory.")]),t._v(" "),a("p",[t._v("That's IPLD.")]),t._v(" "),a("p",[t._v("IPLD is how we go from "),a("em",[t._v("data")]),t._v(" to "),a("strong",[t._v("data structures")]),t._v(".")]),t._v(" "),a("p",[a("strong",[t._v("We do this with a new link type and a data model.")])]),t._v(" "),a("h3",{attrs:{id:"links"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#links"}},[t._v("#")]),t._v(" Links")]),t._v(" "),a("p",[t._v("For links we use a "),a("a",{attrs:{href:"https://specs.ipld.io/block-layer/CID.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("CID"),a("OutboundLink")],1),t._v(". A CID is an extension of "),a("code",[t._v("multihash")]),t._v(",\nin fact a "),a("code",[t._v("multihash")]),t._v(" is part of a "),a("code",[t._v("CID")]),t._v(". We simply add a "),a("em",[t._v("codec")]),t._v(" to a "),a("code",[t._v("multihash")]),t._v("\nthat tells us what format the data is in (JSON, CBOR,\nBitcoin, Ethereum, etc). This way, we can actually link between\ndata in different formats and any link to data anyone ever gives\nus can be decoded so that it can become more than just a series\nof bytes.")]),t._v(" "),a("p",[t._v("CID is a "),a("a",{attrs:{href:""}},[t._v("standard")]),t._v(" that anyone can implement, even people that\nhave no other interest in IPLD beyond the need for hash links to\ndifferent data types can use it.")]),t._v(" "),a("h3",{attrs:{id:"the-data-model"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-data-model"}},[t._v("#")]),t._v(" The Data Model")]),t._v(" "),a("p",[t._v("The IPLD Data Model is a bit more conceptual and can be applied\nto formats that have never considered IPLD.")]),t._v(" "),a("p",[t._v('Consider that every programming language has a library for JSON encoding and decoding. These\nlanguages all adapt the JSON data model (types) into the\nbest fit for that language. A "number" in JSON has many potential mappings in\ndifferent languages, a JSON library has to decide how it is most appropriately represented.\nOur data model is very similar to the JSON data model, but we add a few more types.')]),t._v(" "),a("p",[t._v("First, we add a "),a("strong",[t._v("link")]),t._v(" type using CID as our link format. We also\nadd a "),a("strong",[t._v("binary")]),t._v(" type, which are missing from JSON. We support nothing\nbeyond these and the other types that JSON has already defined quite well.")]),t._v(" "),a("p",[t._v("We then apply this data model to more than just our own formats. We\nhave specifications and libraries for interpreting many formats into\nthis data model. For instance, Bitcoin blocks know nothing about IPLD\nsince they were designed long before IPLD existed. We have a decoder\nfor Bitcoin that presents the data found in a Bitcoin block as the IPLD\nData Model.")]),t._v(" "),a("p",[t._v("This provides a consistent interpretation of all formats across all programming\nlanguages in IPLD terms. For instance, Bitcoin data includes hashes to identify\nblocks and transactions to form a heavily interlinked blockchain. Bitcoin doesn't\nuse CID's internally, but when you use an IPLD codec to read Bitcoin data, the\nhashes will be normalized to CIDs so we maintain a consistent \"link\" type that\nincludes the content address (hash), the hash algorithm (double-SHA2-256) and the\nIPLD codec (e.g. "),a("code",[t._v("bitcoin-block")]),t._v(" or "),a("code",[t._v("bitcoin-tx")]),t._v(").")]),t._v(" "),a("p",[t._v("This lets you build data structures that freely link between formats\nthat can be traversed though a normalized data model. Effectively,\nyou can write format agnostic tools for reading, distributing, and\npersisting all content addressed data. Your custom IPLD data structure, encoded\nin your chosen IPLD codec, can link to anyone else's IPLD data, arbitrary\nBitcoin blocks, Git commits and a universe of content addressed data.")]),t._v(" "),a("h2",{attrs:{id:"getting-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[t._v("#")]),t._v(" Getting Started")]),t._v(" "),a("h3",{attrs:{id:"tutorial"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tutorial"}},[t._v("#")]),t._v(" Tutorial")]),t._v(" "),a("p",[t._v("We highly recommend you read the following tutorial\nbefore trying to use IPLD. This tutorial is language\nagnostic and includes examples in JavaScript, Go and Rust.")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/tutorial.html"}},[t._v("Thinking in Data Structures")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/tutorial.html#addressing"}},[t._v("Addressing")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/tutorial.html#linking"}},[t._v("Linking")])],1)])],1)]),t._v(" "),a("h3",{attrs:{id:"programming-language-guides"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#programming-language-guides"}},[t._v("#")]),t._v(" Programming language guides")]),t._v(" "),a("p",[t._v("When you have understood the basics of IPLD, you will need to familiarize\nyourself with the available IPLD libraries available for your programming\nlanguage. Each language is different in the way they present and interact with\nIPLD data.")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"./getting-started/js"}},[t._v("Getting started in JavaScript")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"./getting-started/js#storing-ipld-data-in-ipfs"}},[t._v("Persisting IPLD data in "),a("code",[t._v("js-ipfs")]),t._v(" and "),a("code",[t._v("js-ipfs-lite")])])])])]),t._v(" "),a("li",[a("a",{attrs:{href:"./getting-started/go"}},[t._v("Getting started in Go")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"./getting-started/go#IPFS"}},[t._v("Persisting IPLD data in "),a("code",[t._v("go-ipfs")])])])])]),t._v(" "),a("li",[a("a",{attrs:{href:"./getting-started/rust"}},[t._v("Getting started in Rust")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"./getting-started/rust#IPFS"}},[t._v("Persisting IPLD data in "),a("code",[t._v("rust-ipfs")])])])])])]),t._v(" "),a("h2",{attrs:{id:"media"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#media"}},[t._v("#")]),t._v(" Media")]),t._v(" "),a("p",[a("a",{attrs:{href:"./docs/media"}},[t._v("Talks, blog posts, and other media about IPLD.")])]),t._v(" "),a("h2",{attrs:{id:"further-reading"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[t._v("#")]),t._v(" Further Reading")]),t._v(" "),a("ul",[a("li",[a("strong",[a("a",{attrs:{href:"./docs/gtd"}},[t._v("Getting Things Done with IPLD")])]),t._v(": How you approach IPLD depends\non the problem you are trying to solve. Read our guide to understand how IPLD\ncan be best used to solve your data problems.")]),t._v(" "),a("li",[a("strong",[a("RouterLink",{attrs:{to:"/docs/ecosystem.html"}},[t._v("IPLD in the InterPlanetary Ecosystem")])],1),t._v(": The array\nof new technologies that IPLD relates to can be confusing at first. Read our\nguide to understand how IPLD relates to "),a("strong",[t._v("IPFS")]),t._v(", "),a("strong",[t._v("libp2p")]),t._v(", "),a("strong",[t._v("CIDs")]),t._v(",\n"),a("strong",[t._v("multiformats")]),t._v(" and more.")]),t._v(" "),a("li",[a("strong",[a("a",{attrs:{href:"./docs/objectives"}},[t._v("Objectives and Scope of IPLD")])]),t._v(": Why are we pursuing\nthis project and where do we hope it to go? Read our guide to understand what\nguides our development efforts.")]),t._v(" "),a("li",[a("strong",[a("a",{attrs:{href:"https://specs.ipld.io/schemas/",target:"_blank",rel:"noopener noreferrer"}},[t._v("IPLD Schemas"),a("OutboundLink")],1)]),t._v(": Describing the shape and\nlayout of data structures is important for documentation, communication,\nvalidation and much more. Read about our the Schema language designed around\nthe IPLD Data Model.")]),t._v(" "),a("li",[a("strong",[a("a",{attrs:{href:"./docs/advanced-layouts"}},[t._v("Advanced Data Layouts")])]),t._v(': A large amount of the\npower afforded by IPLD is in creating complex and potentially very large data\nstructures. Advanced Data Layouts (ADLs) are how we formally define them and\nthe logic used to create and traverse linked data and create abstractions that\nare familiar to any programmer (e.g. a "map" that holds millions of records on\nthe persistent web).')])]),t._v(" "),a("h3",{attrs:{id:"faq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[t._v("#")]),t._v(" FAQ")]),t._v(" "),a("p",[a("a",{attrs:{href:"./FAQ"}},[t._v("Frequently Asked Questions")])]),t._v(" "),a("h2",{attrs:{id:"glossary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#glossary"}},[t._v("#")]),t._v(" Glossary")]),t._v(" "),a("h3",{attrs:{id:"block"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#block"}},[t._v("#")]),t._v(" Block")]),t._v(" "),a("p",[t._v('The term "block" is used to refer to the pairing of a raw binary and a CID.')]),t._v(" "),a("p",[t._v("Most users don't work directly with raw blocks. Instead, block binary data is\nencoded and decoded to and from the IPLD "),a("a",{attrs:{href:"#data-model"}},[t._v("Data Model")]),t._v(". It's only if\nwriting a storage system such as a database, a filesystem or a replicator that\nyou will work directly with blocks.")]),t._v(" "),a("p",[t._v('The term "block" is sometimes loosely used to refer to the Data Model\ninstantiation of decoded raw block data. While this is often useful when\nconceptualizing data and the way links are composed and traversed, the strict\ndefinition of "block" is intended to refer to the '),a("code",[t._v("Binary:CID")]),t._v(" pairing.")]),t._v(" "),a("p",[t._v("See the "),a("a",{attrs:{href:"https://specs.ipld.io/block-layer/block.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Block specification"),a("OutboundLink")],1),t._v(" for\nfurther details.")]),t._v(" "),a("h3",{attrs:{id:"cid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cid"}},[t._v("#")]),t._v(" CID")]),t._v(" "),a("p",[t._v("CID is a "),a("strong",[t._v("Content IDentifier")]),t._v(". It's a self-describing data structure identifier. In other\nwords, it's a hash that says what kind of hash it is and how to decode the binary\ndata identified by the hash.")]),t._v(" "),a("p",[t._v("See the "),a("a",{attrs:{href:"https://specs.ipld.io/block-layer/CID.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("CID specification"),a("OutboundLink")],1),t._v(" further\ndetails. In addition, the "),a("a",{attrs:{href:"https://github.com/multiformats/cid",target:"_blank",rel:"noopener noreferrer"}},[t._v("full format specification"),a("OutboundLink")],1),t._v("\nis part of the multiformats project and should be referred to when creating a\nCID implementation for a new language.")]),t._v(" "),a("h3",{attrs:{id:"codec"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#codec"}},[t._v("#")]),t._v(" Codec")]),t._v(" "),a("p",[t._v('The term "codec" refers to a '),a("a",{attrs:{href:""}},[t._v("mutlicodec")]),t._v(" which defines a specific binary data\nencoder and/or decoder (usually both).")]),t._v(" "),a("p",[t._v("A codec is responsible for encoding "),a("a",{attrs:{href:"#data-model"}},[t._v("Data Model")]),t._v(" instantiations into\nbinary and decoding binary into the "),a("a",{attrs:{href:"#data-model"}},[t._v("Data Model")]),t._v(".")]),t._v(" "),a("p",[t._v("Examples:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#DAG-CBOR"}},[t._v("DAG-CBOR")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#DAG-JSON"}},[t._v("DAG-JSON")])]),t._v(" "),a("li",[t._v("bitcoin-block, bitcoin-tx")]),t._v(" "),a("li",[t._v("Git")]),t._v(" "),a("li",[t._v("CBOR")]),t._v(" "),a("li",[t._v("JSON")])]),t._v(" "),a("h4",{attrs:{id:"dag-cbor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dag-cbor"}},[t._v("#")]),t._v(" DAG-CBOR")]),t._v(" "),a("p",[t._v('DAG-CBOR is a codec that implements the IPLD Data Model as a subset of CBOR, with additional constraints\nfor hash consistent representations. DAG-CBOR adds a "link" type using a CBOR\ntag.')]),t._v(" "),a("p",[t._v("See the full "),a("a",{attrs:{href:"https://specs.ipld.io/block-layer/codecs/dag-cbor.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("DAG-CBOR specification"),a("OutboundLink")],1),t._v("\nfor further information, including details about features and types of CBOR\nencoding that are excluded from DAG-CBOR in order to make it a suitable format\nfor content addressed data.")]),t._v(" "),a("h4",{attrs:{id:"dag-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dag-json"}},[t._v("#")]),t._v(" DAG-JSON")]),t._v(" "),a("p",[a("strong",[t._v("Not recommended for production use")])]),t._v(" "),a("p",[t._v('DAG-JSON is a codec that implements the IPLD Data Model using JSON serialization.\nDAG-JSON adds "link" and "binary" types as well as additional constraints for\nhash consistent representations.')]),t._v(" "),a("p",[t._v("See the full "),a("a",{attrs:{href:"https://specs.ipld.io/block-layer/codecs/dag-json.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("DAG-JSON specification"),a("OutboundLink")],1),t._v("\nfor further information.")]),t._v(" "),a("h3",{attrs:{id:"data-model"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-model"}},[t._v("#")]),t._v(" Data Model")]),t._v(" "),a("p",[t._v("The IPLD Data Model describes common base types that we call "),a("strong",[t._v("kinds")]),t._v(' ("types"\nis a term that we prefer to reserve for data structures described by IPLD Schemas).')]),t._v(" "),a("p",[t._v("These "),a("em",[t._v("kinds")]),t._v(" allow IPLD to create data structures using simple types\naccessible across many programming languages and encoding formats.")]),t._v(" "),a("p",[t._v("Using the Data Model we can implement file systems, databases, and custom\napplication data structures in a format agnostic way and even link between\nthese structures and formats using common toolchains.")]),t._v(" "),a("p",[t._v("All JSON types are Data Model kinds:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("boolean")]),t._v(" (true, false)")]),t._v(" "),a("li",[a("code",[t._v("null")])]),t._v(" "),a("li",[a("code",[t._v("string")]),t._v(" (utf8)")]),t._v(" "),a("li",[t._v("numbers:\n"),a("ul",[a("li",[a("code",[t._v("integer")])]),t._v(" "),a("li",[a("code",[t._v("float")])])])]),t._v(" "),a("li",[a("code",[t._v("map")])]),t._v(" "),a("li",[a("code",[t._v("list")])])]),t._v(" "),a("p",[t._v("In addition, there is a "),a("code",[t._v("bytes")]),t._v(" kind for raw binary data.")]),t._v(" "),a("p",[t._v("Finally, there is a "),a("code",[t._v("link")]),t._v(" kind represented by a "),a("a",{attrs:{href:"#CID"}},[t._v("CID")]),t._v(".")]),t._v(" "),a("p",[t._v("Read the full "),a("a",{attrs:{href:"https://specs.ipld.io/data-model-layer/data-model.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("IPLD Data Model specification"),a("OutboundLink")],1),t._v("\nfor further details.")]),t._v(" "),a("h3",{attrs:{id:"nodes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nodes"}},[t._v("#")]),t._v(" Nodes")]),t._v(" "),a("p",[t._v('A "node" in IPLD is a point in a graph—an element of the Data Model in an\ninstantiated data structure. A "block" will typically contain many nodes. Graph\ntraversal involves navigating nodes across block boundaries and identifying specific\nelements within a Data Model representation.')]),t._v(" "),a("p",[t._v('It is useful to consider the Data Model as being formed of "scalar" and "recursive"\nkinds when considering nodes and possible traversal. "Scalar" kinds are terminal\nnodes in the Data Model: null, boolean, integer, float, string, bytes. "Recursive" kinds\ncan contain other kinds within them and therefore allow deeper traversal: map and list.\nThe link kind is scalar, but is typically treated as a transparent node for the purpose\nof traversal such that data spanning many blocks can be addressed as a single graph of\nnodes.')]),t._v(" "),a("h3",{attrs:{id:"hamt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hamt"}},[t._v("#")]),t._v(" HAMT")]),t._v(" "),a("p",[t._v("HAMT stands for "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Hash_array_mapped_trie",target:"_blank",rel:"noopener noreferrer"}},[t._v('"Hash Array Mapped Trie"'),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v('HAMT\'s in IPLD differ from typical in-memory implementation as we require the use of "buckets"\nto manage performance and use links to connect blocks to form potentially very large collections of data.')]),t._v(" "),a("p",[t._v("Read our "),a("a",{attrs:{href:"https://specs.ipld.io/data-structures/hashmap.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("IPLD Hashmap (HAMT) specification"),a("OutboundLink")],1),t._v("\nfor furthe details.")]),t._v(" "),a("h3",{attrs:{id:"graphsync"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#graphsync"}},[t._v("#")]),t._v(" Graphsync")]),t._v(" "),a("p",[t._v("Graphsync is a replication protocol for IPLD. It's used heavily by "),a("a",{attrs:{href:"https://filecoin.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Filecoin"),a("OutboundLink")],1),t._v(" and experimentally by\nIPFS.")]),t._v(" "),a("p",[t._v("Graphsync uses "),a("a",{attrs:{href:"#selectors"}},[t._v("IPLD Selectors")]),t._v(" to replicate sections of a larger IPLD graph.")]),t._v(" "),a("p",[t._v("Read the full "),a("a",{attrs:{href:"https://specs.ipld.io/block-layer/graphsync/graphsync.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Graphsync specification"),a("OutboundLink")],1),t._v("\nfor further details.")]),t._v(" "),a("h3",{attrs:{id:"selectors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#selectors"}},[t._v("#")]),t._v(" Selectors")]),t._v(" "),a("p",[t._v("Selectors define selection criteria for IPLD graph queries.")]),t._v(" "),a("p",[t._v("IPLD Selectors are a declarative format for specifying a walk over a "),a("a",{attrs:{href:"#data-model"}},[t._v("Data Model")]),t._v('\ngraph—what nodes to walk over (or not), recursively; and, some positions to "visit" (with a callback, typically, though library implementation details may vary).\nYou can think of Selectors as being roughly like "regexps for graphs".')]),t._v(" "),a("p",[t._v("Selectors are natively implemented in most IPLD libraries (for performance reasons),\nbut the format itself is standardized.\nThe format is described in IPLD (using "),a("a",{attrs:{href:"https://specs.ipld.io/schemas/",target:"_blank",rel:"noopener noreferrer"}},[t._v("IPLD Schemas"),a("OutboundLink")],1),t._v(",\nso it's possible to serialize Selectors in any "),a("a",{attrs:{href:"#codecs"}},[t._v("Codec")]),t._v(" you want,\nand it's also possible to inspect (and transform!) Selector documents using standard "),a("a",{attrs:{href:"#data-model"}},[t._v("Data Model")]),t._v(" tools.")]),t._v(" "),a("p",[t._v("Read the full "),a("a",{attrs:{href:"https://specs.ipld.io/selectors/selectors.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("IPLD Selectors specification"),a("OutboundLink")],1),t._v("\nfor further details.")]),t._v(" "),a("h2",{attrs:{id:"specifications"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specifications"}},[t._v("#")]),t._v(" Specifications")]),t._v(" "),a("p",[t._v("You can refer to the "),a("a",{attrs:{href:"https://ipld.github.io/specs/",target:"_blank",rel:"noopener noreferrer"}},[t._v("specifications website"),a("OutboundLink")],1),t._v(" for a full list of content.")]),t._v(" "),a("p",[t._v("There are numerous links to specifications throughout this documentation site.")]),t._v(" "),a("p",[t._v("The following curated list of specification pages may be of interest to those\nseeking additional forms of documentation:")]),t._v(" "),a("ul",[a("li",[a("strong",[a("a",{attrs:{href:"https://specs.ipld.io/design/",target:"_blank",rel:"noopener noreferrer"}},[t._v("IPLD Exploratory Specifications"),a("OutboundLink")],1)]),t._v(":\nVarious documents about the design, and history of design thought, in and around IPLD.")]),t._v(" "),a("li",[a("strong",[a("a",{attrs:{href:"https://specs.ipld.io/FOUNDATIONS.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("IPLD Foundational Principles"),a("OutboundLink")],1)]),t._v(":\nThe foundation principals of globally content addressed data structures.")]),t._v(" "),a("li",[a("strong",[a("a",{attrs:{href:"https://specs.ipld.io/#ipld-team",target:"_blank",rel:"noopener noreferrer"}},[t._v("Core IPLD team members"),a("OutboundLink")],1)]),t._v(".")])])])}),[],!1,null,null,null);e.default=n.exports}}]);