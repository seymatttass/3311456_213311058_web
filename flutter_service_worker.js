'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "45e2a211e806523ef3edfea0836f245b",
"index.html": "35d679905df8cbca3285ea7b78609663",
"/": "35d679905df8cbca3285ea7b78609663",
"main.dart.js": "10bd31178be38479b0d9e97120d41fed",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "1c6937e6a3f654e3d88fc8164bd988a0",
".git/ORIG_HEAD": "7ebe92e170b60c5cb7cc327c7b801ef8",
".git/config": "9a63a718acf4659f7529bdfb20032471",
".git/objects/0d/a2938c7e97a05860b75429e96b3514066c68b7": "7d140fbf1207ebbd128d47becf24101d",
".git/objects/92/ec4efbc7f9627f89415c64e9a6c45de9797412": "a890496080c573f0da033092fcbb71b6",
".git/objects/92/61b1f8fdb498795340089567fbb3b50913a9b7": "d93d0e075749f46077ab37924ff7327d",
".git/objects/3e/92fd6856e4d476078a81911fd13155f35e6541": "4a1c7cd0387c2054366087b00c53ebd4",
".git/objects/3e/a71a2c5db52c4d2e22949f31b6ed171d47f981": "fc9939b80f1bd1ee5f25aac97c6c8f83",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/9b/fbae573597adb2a91c650b95d7bd133e329ec6": "b234fd361ab3d3a5ed8143ff448a2cb2",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/69/96aec848fa7f06023e2e878f23b11287327888": "ef6136328a966fee404f2cc674847fcd",
".git/objects/3c/506371365483d45d3da0f68afb3f35f99a08f1": "560c15d8105aac56e054767cc0448811",
".git/objects/3c/e680c6653eb5169031045f0591a370e1700b61": "8dde0212d4f62736d809daf5dffa752c",
".git/objects/3c/39288ee2df719853e6b3bb27fa52485a9cf48f": "2e966ab08be6effb37417d554a418b31",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/51/97a51479acde426d17f7c61d01c3f681aca494": "8e4d2536a6d7f4151821b305c1028e07",
".git/objects/51/553ae1788de039ef292ac0ce2a30e4cc2d171c": "89d11a1e3328806392fd4b08fb0f60d5",
".git/objects/58/ecadad7bfa68c503fbf72970c4c446bc76b760": "84ea1f5f4d8c5b0c8bec2ccd834d6d3f",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/94/370aadb35e3943c45eeb3653b800b9143fa5a7": "f9b761b00f89ce190de20e5fc54b5968",
".git/objects/34/f5b631606e3b1d4dfa5d79b5b9a3572d095e97": "3099633b93cbdd2432c44edcd0b31181",
".git/objects/5a/99176b6add66c84bc0b6a4a21f33a02a1e2da9": "1eaf30a2837aaea97a685dbf5e2545e6",
".git/objects/9c/6caeadd124cd6e05c4e5a117b1c8b9e0db8a3c": "f25b5b2493f805bcb45330a16b85f8a1",
".git/objects/9c/6f9c347237ab31841fc20d4e5aad8c82a82440": "91e6a52f7c0240928812b97752d67d24",
".git/objects/9c/60e5311f641af5ddcf32085d9040aa4ebb324e": "d76802d582917f5294f843873ac6bbb5",
".git/objects/a4/3d4bb78fb8562c86ed5610c2978ff65ebd9830": "8af1aa2ad7773ba6973c127bf0f1dc92",
".git/objects/b5/343807b6421bf38c45545cb10b330af2c5a059": "792ee2b9ab7e03e9dc65b292352e5fc1",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/ac/cdd7ad39fac10be5ebb7137085b0fd9ac60177": "ae496c9d62714d1477d418e79931cc32",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/be/41f51196a4516f4f6d71cffd001b7bea46a1df": "cf99e621adfe24640f22d30d101ce9f9",
".git/objects/be/4f0a29f82145784f478449b6d451287383eded": "78d68bd429c337c8bf833de5f946a6e5",
".git/objects/df/ceded5d4aa3820eeb841c1229480e3215b59f0": "4e66f71dde1ee452ed6f4f62733195c3",
".git/objects/b4/6a56fcd55ee9520190dd47d09184161001b00f": "b864c67e08a09c26134625b761f609ed",
".git/objects/b4/ef39c428d7b3407a802ee817fb8982166dcb92": "fdd34ec2a368e0cff86aa7e0de234cd0",
".git/objects/a5/4f306b8d3e45f2497a7d96a408348397263b0e": "24052ef59d9da199996be06ba280eced",
".git/objects/a5/e0685ae88fb909c3d873c86f8794a404605304": "fbd74b8b0730be6e3645c9113c7a1bf0",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/e2/76a5162f875b2d86d54dbaa8bedc76d1eb16be": "f716fd68910ee44bfe4aa5b94e1a24ff",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/cf/0375ff55ef32b8388651ae16f6232b2e0cd5ac": "d1d1c5575b712095a6592c11ac5ceb42",
".git/objects/e4/675f6da1ef8aabb10ea108e0b503eccd9edc72": "cfba84d55bb6f484aa71fc4d42207dab",
".git/objects/e4/4ba9a69aa625c452018c8f085dd74d59966e4b": "c5d92ed934ca1c63854ec211eccc64d3",
".git/objects/fe/3e7460b51118f96f84bea5fc70d1179c451309": "a0aab26c084c41333e5d01fefa4f7e43",
".git/objects/fe/12e01d8800e75d50961fa17a4be2be69e5482b": "5d119aa4207f99972b9486ec87bfc2a8",
".git/objects/fe/d7779eb586698e808e09d894565214c28660ed": "fdfc1aaa7fee8e2652c3b69c0b623a1b",
".git/objects/c8/6d5b5aec97a32dc1d9a97331a9e42f5c5a4089": "1e06d8142fc0b0c06cf4a786119d17b7",
".git/objects/fb/4730cf0d284792fa5f5b445069510b4dba4984": "6045e7ddd6fbfe396740b370c582433f",
".git/objects/fb/02e4015e5a976e0162b9c3e1f457ab97aa6de5": "951cf50def56396e4a8007d2bc149309",
".git/objects/c1/b80529d83be217f1eff1b12088948b6c0ed3b7": "7ca58bafe0a8bee784f30ed4b2ba9096",
".git/objects/11/afaf03db8fd5764790603ad3f895397b128fc2": "1caae9741ca9ab3f1323c446f4298377",
".git/objects/89/5de9eea0d2509a1a547aac2ae1770aef89c53a": "16e45f3124a095431d891aa0f525e218",
".git/objects/74/aa84a32996ed9573702f29909eb437f635cf6c": "b8e1bf5e2285b8028a57c7d9ee96c8de",
".git/objects/8a/60166a22998edeb259c1a0a42242957d7a3d24": "900b083b25323832da96c3e8e8312e20",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/5255eadaa5f05e2f543d6555d423009a7b2247": "719ad9008478a0bf494a1c98458d497e",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/4d/917cd62e01b61a11c97981f5c407a28d92079e": "0428f920c4be5a69e7b8014f09f6021e",
".git/objects/72/ffb33d177c16dc256c323735572ac36a021e1f": "80b77a56b3e196156761cabb6bb535e4",
".git/objects/44/076744ea4f47596d0f7c16801ef88daa2e4783": "390bf034191b85b75b62ab5f6d01f080",
".git/objects/43/967668445e7bb31724b0f6899e13d6fe047db9": "f5d5408bc79358abb4174ed175ec0f4e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/683630cae726bdab65d9a5fda7cf4acd30c780": "4349e18d39a1b81ea38947d329988b98",
".git/objects/07/d6b42db36bd35b3ee14fbfaa08b3ddcb08a63b": "b1fa945a2c31e93363bc993c2d642829",
".git/objects/9a/30a0a9bf17269da85533d226a09abdc8d442e6": "946ac1debbd70a6ea5b9226e984440f2",
".git/objects/36/192a58bafc00a02d89aadcb331b9f3b6975c54": "92f37251f365745e4a81803e1adbac4d",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/96/65c2433708107fc679f4d30069a8ee9e9f7210": "58b1dc6d52971caa592a57e8a4c42506",
".git/objects/3a/6e7e0e65165983770d6e107eb92daca6236ac8": "0d51b862ab2884a73f1dc17057148a37",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/97/e856c211a3df37cc7b28147d3fb8c713cf721b": "55d42a7beb2157acc9d873d08ef309a3",
".git/objects/63/5155f74b2d66502156f2e5c30a6e7c361197ff": "3d9df4b03e9773ba87d4bd06f78a66f1",
".git/objects/63/0e3b3c7592b8a7e0154ecad268a9153e60a160": "ac4bf89c317e923f25af18a434dffc27",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/a0/c17893d5be09effa5a858791121cc50c5b6062": "c6887fc3fd6588194477722a7bfa8981",
".git/objects/b8/a08458a50a4791e9928fab5bbcbfc81852712b": "87be6f3b0f15eed5915ebfa3dc5924ae",
".git/objects/b6/3e2f3c3bf7788e3efd7af4bbff13470a042e69": "9db62d156fa205cd4ca3b60de3187517",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/4b9697233ced924fe3044310e51e3022b15989": "fb04554fbf7e3fda5446b98de496ad9a",
".git/objects/de/9edfe665695f56f82c9a4c6ba6a20513971932": "0c7ad939b3237d6f69333303ba8976f3",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/bfe49ec74fd43804d45c66debb64a7d6485f38": "bb6424355b193c3fb2b9bbf2a944e258",
".git/objects/c4/77ce2ff09c48b6ffb998967c5a7aae9319f2a5": "dbbcf256d8f7dafef54535b1d4a0a0a1",
".git/objects/c4/6754ebc2624d5bb239bc494afa59f38d5c3cde": "513b531a8ee006158b272df48e91c778",
".git/objects/cd/5b390c710d1d61fd701334435b168da5783430": "8cbd2412259f28caeacb1568bef5e395",
".git/objects/f9/d9730858d4b16f90a5731b8b3e49a45b9ebab2": "e7c6b0288a1809547271ab279614f506",
".git/objects/f7/ea5dd56f16a4a221a457cd3f9678c85c49d43a": "75bdcb8989273de3c2b57394c2f18894",
".git/objects/ff/e9bb9269397618d581cdf714cea352200b2ab6": "277d570f4d2c4ee9831fd07725728519",
".git/objects/c5/b0a611a2706e2d56d9596914c29b659f2e9f0b": "39a282cb2386bb66c2eade83ff42d731",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/f8/b7580015fe1c82e31f55acbd52f53ac8026336": "7c1893f4defe3b6d0fab9093ce60be0c",
".git/objects/e0/59fb25d80716153207c100074cce8e4ef6064a": "c20bae72d6d51b6c8ce1893951cd263a",
".git/objects/e0/6009891d759ed09b917e23f42f2835ef15ea05": "3cdcd5c3427348b002334904c6437a42",
".git/objects/e0/5952511c571aa79aaeb4c857738bcd214dd14e": "aa697c276f596db984f40e67b7f88e1e",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/28daffecd55dba974810e611299d7c1170a5a5": "aca171a650a18e1278fe67d30cc4e430",
".git/objects/83/7581072dab34ad9c9130ee75da54925a0f829d": "31a032ed3501cd1a115a87bd3ffcc8f1",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/15/07506ac154250e3385286e9e9e2c6eb1ae4547": "cd8fa76cf9266b8c7251517a47d6a9b9",
".git/objects/15/9fb801cc3ba2b663bb37d7837e6c4b33c4ed69": "b092646004d81bd1cc2cb22936d4872b",
".git/objects/15/cf53845ebd74452b6beb044fba75735b7145be": "2bb45460d0f50369e0c9b8c24df4b2f1",
".git/objects/8c/6aa7a4513c76a05f7bda748d042d01a839881a": "debd8520016f24e0bfc036566256de4f",
".git/objects/8c/220f975fe6ca0329f6b8a1c7e8e268b2345f1a": "2253e4ab684fbaa6e8ace98d1d2b9691",
".git/objects/85/1c523da0e63cc80303be382fc2db6737fc60b0": "f4a7cefeefba90f67cfc4a0fcba23e8c",
".git/objects/85/ccd84d2445050848a0c1b92e2856e431f99af0": "0435a4be540e30efd9a7f5255934e5cf",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/71/7ee4e2d0f8b7863c4cc7e7333dce5b225ff7a6": "08462a095fa7c0cb0b7e2b2cdb406708",
".git/objects/8b/ec1cfe2bbef2d36ef5b85880f1c58f112c1841": "06a3c0aae39efd6f933adbb05a94a17a",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1d861298f012e622fa4616a5018a4284",
".git/logs/refs/heads/main": "c743441cfd6843e5336dae052840cb4d",
".git/logs/refs/remotes/origin/main": "25bb422548401863872990785d671055",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "4d067bfb41787e3ebec371cb15b5320c",
".git/refs/remotes/origin/main": "4d067bfb41787e3ebec371cb15b5320c",
".git/index": "4559c4ebaffc9c8c2d5780d5c1778149",
".git/COMMIT_EDITMSG": "9a5a8814c6ed202991f17d1efe7cfe27",
".git/FETCH_HEAD": "89fc553910165d1ce175762d05377517",
"assets/images/arkanotluk.jpeg": "525fa2647240005fb9570907e67cb1d4",
"assets/images/giri%25C5%259F.jpeg": "80cfbcb9317cf1034043c0a814d9d295",
"assets/images/bde2d4fad603ab5610fb5ca8694778d1.jpg": "6a58fe7fa8abb8a45c2ad2dd972ab07c",
"assets/images/83880f26-12c1-46d1-bc8a-f26acc544f44.jpeg": "4eb9c1297914c6796223e7dbc3fadbd5",
"assets/images/Ggg.jpeg": "bb5d7f7198ebb7cacff3e8066d7bf535",
"assets/images/64ff2aeb-d27e-4912-8093-67f8df610732.jpeg": "34e8d5f95dfc1645b416b735eb01c5eb",
"assets/images/indir.jpeg": "56734475ea5c19250f59797c0e4a3a81",
"assets/images/30da50228346d0976ff6f87e7eb5db29.jpg": "6e04c8212168bda6d7553eecf50855fb",
"assets/images/2c5778c05a723ee81716408649282356.jpg": "9f3c0b81a7696a4c4454a4c39621a9e9",
"assets/images/a35b8b4e-971a-446d-99f9-8e8a3ae2a4f3%2520kopyas%25C4%25B1.jpeg": "0a60c2789478fc667c34f808b7b75431",
"assets/images/0ee3e4360f27beb3e0c8cd5f7a907347.jpg": "0128a1195ff3e0813f565b0c75e21652",
"assets/images/018c7c73-ead4-4958-8625-b102588a54b8.jpeg": "dc2b67d7c30424148c5cecc17b2a79e2",
"assets/images/16097ed015beae32833ab47a34cb0d4a.jpg": "dcfe45b316642b80f5a5cdde9a54407d",
"assets/images/fav.jpeg": "e56ffbe8266206ee8a4caeedd984815b",
"assets/images/ac6ba55279b3940e984eb0a71790f9b3.jpg": "33e9ec39b7f80b34c604278080fd5c80",
"assets/images/6a4465318f3cf72fa0708d7dc31d05b1.jpg": "19be7c8fa06838fc5932b05969b4ab08",
"assets/images/Restaurante.jpeg": "0a60c2789478fc667c34f808b7b75431",
"assets/images/purple.jpeg": "88a7ca94797f5e4d47bc9acb470fb830",
"assets/images/dldklf.jpeg": "ea7ef34b63b41fc396f002d61ec05e16",
"assets/images/123.jpeg": "f81e96c0140d88d85fd47d3e35f130c8",
"assets/images/ef2955c4-d3e1-4679-8c34-4d80fe63a78a.jpeg": "80cfbcb9317cf1034043c0a814d9d295",
"assets/images/%25C4%25B0nstagram.jpeg": "e82c83ad7cf37808c1bc4cc138d01bf6",
"assets/images/Instagram%2520hightlight%2520icon.jpeg": "fbb5f67dd4c165c667a85d5607a927d5",
"assets/images/8a341af0d2a37b0836be4e75b938d715.jpg": "f277411f4c8d6aa372037957ec9b8791",
"assets/images/760a7bab84365eb6d15153f3a5712b70.jpg": "4caa73908c79bc7a76e26ed39f43095b",
"assets/images/d36b071f479f174a38cc4d1e4b75c098.jpg": "77155af71c9ec07e933ae25a360d2fe8",
"assets/images/e35ca7cc3eaf5d9acbdf7c6f6ced4437.jpg": "7499ec32b2aebb6c1b79cedb9ba8129f",
"assets/images/notluk.jpeg": "a873f631ecf80c5b10f9c17e8a0b028d",
"assets/images/86f779a70c7f78ef4b785ebd5cb8fa54.jpg": "b031e302379898f196126fed6a450802",
"assets/images/a99b71b3ab0b260f52483c861f7cea28.jpg": "b1fa3093d147f2b48eb0af13539d47b9",
"assets/images/unnamed.png": "f4ce7470b30deec04a0a5a5067ffa6c2",
"assets/images/Arka%2520plan.jpeg": "771ec8040a694f7fc0484983e6a3438a",
"assets/images/arkanot.jpeg": "b36410b742666e37854dab6ad7312255",
"assets/images/Contacts%2520app%2520icon.png": "9458d848fabecb4046acbe9d9ef547e9",
"assets/images/Fondos%2520Para%2520Word%2520_%2520Fondos%2520De%2520Word,%2520Fondos%2520De%2520Pantalla%2520De%2520%2520CB8.jpeg": "4987ef35361e14d4fbbad8cfce809555",
"assets/images/Faircore.jpeg": "9dafb08123ab48a7c26f19b08a052e10",
"assets/images/Tela%2520inicial%25203.jpeg": "838053c150c1ee6a7171a50de79da2f5",
"assets/images/1ed0ef87-f73a-4c45-8114-980a58b60c52.jpeg": "426015883387bde114ff6e08dd92680b",
"assets/images/kkk.png": "e373eea89f3b1588fc2b6f94904e7a4e",
"assets/images/a35b8b4e-971a-446d-99f9-8e8a3ae2a4f3.jpeg": "0a60c2789478fc667c34f808b7b75431",
"assets/images/Fon.jpeg": "ea3c573dbae200f90c82b3b9ac5bff36",
"assets/AssetManifest.json": "ef7d239271a6f44743f97105b71ebca6",
"assets/NOTICES": "ccef1f1034fb739f6e011e99ec31bbca",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.smcbin": "7f4563f34fcd6fc2a035efdf448372c1",
"assets/fonts/MaterialIcons-Regular.otf": "ed423d8475fd757ff926d09483d1abde",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
