export const destinations=[
{id:'paris',name:'Paris',country:'France',type:'City',price:420,rating:4.8,days:3,img:'photo-1502602898657-3e91760cbb34',blurb:'Cafés, museums and river walks in the city of light.',hl:['Louvre guided visit','Seine sunset cruise','Montmartre walking tour']},
{id:'rome',name:'Rome',country:'Italy',type:'Culture',price:380,rating:4.7,days:4,img:'photo-1552832230-c0197dd311b5',blurb:'Ancient ruins, lively piazzas and the best pasta of your life.',hl:['Colosseum and Forum tour','Vatican museums','Trastevere food walk']},
{id:'prague',name:'Prague',country:'Czechia',type:'City',price:310,rating:4.7,days:3,img:'photo-1541849546-216549ae216d',blurb:'A fairytale old town, castle views and friendly prices.',hl:['Prague Castle','Charles Bridge at dawn','Old Town Square']},
{id:'barcelona',name:'Barcelona',country:'Spain',type:'Culture',price:450,rating:4.6,days:4,img:'photo-1583422409516-2895a77efded',blurb:'Gaudí architecture, city beaches and late dinners.',hl:['Sagrada Família entry','Park Güell','Barceloneta beach day']},
{id:'amsterdam',name:'Amsterdam',country:'Netherlands',type:'City',price:400,rating:4.5,days:3,img:'photo-1534351590666-13e3e96b5017',blurb:'Canals, bikes and world-class museums.',hl:['Canal cruise','Rijksmuseum','Countryside bike tour']},
{id:'santorini',name:'Santorini',country:'Greece',type:'Beach',price:640,rating:4.9,days:5,img:'photo-1570077188670-e3a8d69ac5ff',blurb:'Whitewashed villages and sunsets over the caldera.',hl:['Oia sunset','Caldera boat trip','Wine tasting']},
{id:'venice',name:'Venice',country:'Italy',type:'Culture',price:470,rating:4.6,days:4,img:'photo-1514890547357-a9ee288728e0',blurb:'Canals, islands and timeless Italian streets.',hl:['Grand Canal ride','Doge’s Palace','Murano island']},
{id:'lisbon',name:'Lisbon',country:'Portugal',type:'City',price:360,rating:4.6,days:3,img:'photo-1555881400-74d7acaacd8b',blurb:'Sunlit streets, viewpoints and Atlantic charm.',hl:['Tram 28','Belém Tower','Alfama food walk']},
{id:'vienna',name:'Vienna',country:'Austria',type:'Culture',price:430,rating:4.7,days:4,img:'photo-1516550893923-42d28e5677af',blurb:'Imperial architecture, cafés and classical music.',hl:['Schönbrunn Palace','Historic cafés','Classical concert']}
];
export const deals=[
{name:'City Starter',nights:3,price:499,cities:'1 city',inc:['Return flights','3 nights hotel','City pass']},
{name:'Euro Explorer',nights:7,price:999,cities:'3 cities',pop:true,inc:['Return flights','7 nights across 3 cities','Rail passes between cities','City pass in every stop']},
{name:'Grand Tour',nights:14,price:1899,cities:'5 cities',inc:['Return flights','14 nights across 5 cities','Rail passes','Guided tour in every city','24/7 trip support']}
];
export const reviews=[['Nour A.','Santorini','We changed dates twice and the team sorted it in minutes. The sunset boat trip was the highlight.'],['Karim S.','Rome','Everything was in one booking: flights, hotel and tours. No stress, and the food walk was fantastic.'],['Mariam H.','Prague','Great value, and the itinerary left enough free time to wander. I’d book again.']];
export const img=(id,w=800)=>`https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;
