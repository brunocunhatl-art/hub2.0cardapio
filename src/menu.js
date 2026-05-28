export const categories=[['mais','Mais vendidos'],['tapiocas','Tapiocas'],['cuscuz','Cuscuz'],['burgers','Burgers'],['doces','Doces'],['bebidas','Bebidas']];
export const additions=[['bacon','Bacon',5],['mussarela','Mussarela',4],['queijo-coalho','Queijo coalho',5],['ovo','Ovo',3],['frango','Frango',6],['calabresa','Calabresa',6],['catupiry','Catupiry',5],['cheddar','Cheddar',5],['banana','Banana',3],['nutella','Nutella',7],['leite-condensado','Leite condensado',4]].map(([id,name,price])=>({id,name,price}));
export const products=[
{id:'tapioca-carne-seca',cat:'mais',name:'Tapioca Carne Seca',desc:'Carne seca, mussarela e queijo coalho.',price:37.90,addons:true,block:['banana','nutella','leite-condensado']},
{id:'tapioca-frango',cat:'tapiocas',name:'Tapioca Frango',desc:'Frango temperado e mussarela.',price:24.90,addons:true,block:['banana','nutella','leite-condensado']},
{id:'tapioca-calabresa',cat:'tapiocas',name:'Tapioca Calabresa',desc:'Calabresa acebolada e queijo.',price:25.90,addons:true,block:['banana','nutella','leite-condensado']},
{id:'tapioca-banana-bacon',cat:'tapiocas',name:'Tapioca Banana Bacon',desc:'Banana, mussarela, bacon e canela.',price:26.90,addons:true},
{id:'cuscuz-base',cat:'cuscuz',name:'Cuscuz Base',desc:'Cuscuz tradicional. Adicionais pagos se quiser.',price:14.90,addons:true,block:['carne-seca','nutella','leite-condensado']},
{id:'cuscuz-premium',cat:'cuscuz',name:'Cuscuz Premium',desc:'Carne seca, mussarela e queijo coalho inclusos. Produto fechado, sem adicionais.',price:32.90,addons:false},
{id:'xburger',cat:'burgers',name:'X-Burger',desc:'Pão, carne, queijo, salada e molho da casa.',price:22.90,addons:true,block:['banana','nutella','leite-condensado']},
{id:'xbacon',cat:'burgers',name:'X-Bacon',desc:'Pão, carne, queijo, bacon e molho da casa.',price:27.90,addons:true,block:['banana','nutella','leite-condensado']},
{id:'doce-nutella',cat:'doces',name:'Tapioca Nutella',desc:'Tapioca doce com Nutella.',price:19.90,addons:true,block:['frango','calabresa','bacon','ovo']},
{id:'doce-banana',cat:'doces',name:'Tapioca Banana Canela',desc:'Banana, canela e leite condensado.',price:19.90,addons:true,block:['frango','calabresa','bacon','ovo']},
{id:'milkshake-chocolate',cat:'bebidas',name:'Milkshake Chocolate',desc:'Cremoso e gelado.',price:18,addons:false},
{id:'milkshake-nutella',cat:'bebidas',name:'Milkshake Chocolate com Nutella',desc:'Milkshake com Nutella.',price:20,addons:false},
{id:'refrigerante',cat:'bebidas',name:'Refrigerante lata',desc:'Consultar sabores disponíveis.',price:6,addons:false},
{id:'agua',cat:'bebidas',name:'Água mineral',desc:'Sem gás.',price:3.5,addons:false}
];
