package stanzafinalproject.demo;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import stanzafinalproject.demo.resources.ExamplePoem;
import stanzafinalproject.demo.resources.ExamplePoemType;
import stanzafinalproject.demo.storage.ExamplePoemStorage;
import stanzafinalproject.demo.storage.ExamplePoemTypeRepository;
import stanzafinalproject.demo.storage.ExamplePoemTypeStorage;

import javax.annotation.Resource;

@Component
public class ExamplePoemPopulator implements CommandLineRunner {

    private ExamplePoemStorage examplePoemStorage;
    private ExamplePoemTypeStorage examplePoemTypeStorage;

    public ExamplePoemPopulator(ExamplePoemStorage examplePoemStorage, ExamplePoemTypeStorage examplePoemTypeStorage) {
        this.examplePoemStorage = examplePoemStorage;
        this.examplePoemTypeStorage = examplePoemTypeStorage;
    }

    @Resource
    private ExamplePoemTypeRepository examplePoemTypeRepo;

    @Override
    public void run(String... args) throws Exception {

        //adding poem types to repository
        ExamplePoemType haiku = new ExamplePoemType("Haiku", "A Japanese short poetic form comprised of 3 unrhymed lines with a specific syllabic pattern.\nLine 1 has five syllables,\nLine 2 has seven syllables,\nLine 3 has five syllables.");
        examplePoemTypeStorage.addExamplePoemType(haiku);
        examplePoemTypeRepo.save(haiku);
        ExamplePoemType sonnet = new ExamplePoemType("Sonnet", "A 14-line rhyming poem. There are three main types of sonnets, with slightly different rhyme schemes(a rhyme scheme is just the pattern of rhyme in a poem): the Petrarchan sonnet, the Italian sonnet, and the Shakespearean sonnet(also called the English sonnet).\nAn important aspect of a sonnet is the volta, which means “turn”in Italian. This is where some kind of shift occurs in the poem, in terms of tone, argument, thought, etc. In the Shakespearean sonnet, the final couplet (or the last two lines of the poem) is where the volta occurs.");
        examplePoemTypeStorage.addExamplePoemType(sonnet);
        examplePoemTypeRepo.save(sonnet);
        ExamplePoemType villanelle = new ExamplePoemType("Villanelle", "A French form consisting of five three-line stanzas(or tercets) followed by a quatrain(a four-line stanza), for a total of 19 lines. Lines one and three of the first stanza are rhyming refrains that alternate as the third line in each successive stanza. The two refrains also make up the final two lines of the poem");
        examplePoemTypeStorage.addExamplePoemType(villanelle);
        examplePoemTypeRepo.save(villanelle);
        ExamplePoemType sestina = new ExamplePoemType("Sestina", "Another French poetic form. This one typically does not rhyme. It is composed of six stanzas of six lines, followed by an optional three-line envoy. The final word of each line of the first stanza is repeated as the end words in each following stanza, in a specific pattern.");
        examplePoemTypeStorage.addExamplePoemType(sestina);
        examplePoemTypeRepo.save(sestina);
        ExamplePoemType pantoum = new ExamplePoemType("Pantoum", "A form derived from a Malaysian poetic form called the pantun. It is similar to the villanelle in the way it utilized repeated refrains throughout the poem. The pantoum is made up of quatrains (four-line stanzas), with the second and fourth lines of each quatrain repeated as the first and third lines of the next. The second and fourth lines of the final stanza repeat the first and third lines of the first stanza.");
        examplePoemTypeStorage.addExamplePoemType(pantoum);
        examplePoemTypeRepo.save(pantoum);
        ExamplePoemType ghazal = new ExamplePoemType("Ghazal", "An ancient Arabic poetic form, dating back to the 7th-century. It typically consists of five to fifteen couplets (two-line stanzas) that can stand on their own, but are in some way linked, usually in theme.Each line is roughly the same length. The form is less strict in English and does not adhere to a specific meter, but typically the second line of each couplet ends with the same word. Often the final couplet includes a reference to the poet by name.");
        examplePoemTypeStorage.addExamplePoemType(ghazal);
        examplePoemTypeRepo.save(ghazal);


        //adding example poems to api
        ExamplePoem exHaiku1 = new ExamplePoem("Haiku", "Etheridge Knight", haiku, "https://www.poetryfoundation.org/poems/47593/haiku");
        examplePoemStorage.save(exHaiku1);
        ExamplePoem exHaiku2 = new ExamplePoem("[The cry of the cicada]", "Matsuo Basho", haiku, "https://poets.org/poem/cry-cicada");
        examplePoemStorage.save(exHaiku2);
        ExamplePoem exHaiku3 = new ExamplePoem("Blind Boone’s Apparitions", "Tyehimba Jess", haiku, "https://poets.org/poem/blind-boones-apparitions");
        examplePoemStorage.save(exHaiku3);
        ExamplePoem exHaiku4 = new ExamplePoem("5 & 7 & 5", "Anselm Hollo", haiku, "https://poets.org/poem/5-7-5");
        examplePoemStorage.save(exHaiku4);
        ExamplePoem exHaiku5 = new ExamplePoem("[i am moving in]", "Sonia Sanchez", haiku, "https://poets.org/poem/haiku-i-am-moving");
        examplePoemStorage.save(exHaiku5);
        ExamplePoem exHaiku6 = new ExamplePoem("scent of orange blossoms: haiku/senryu", "Teresa Mei Chuc", haiku, "https://www.poetryfoundation.org/poems/148341/scent-of-orange-blossoms-haiku-senryu");
        examplePoemStorage.save(exHaiku6);
        ExamplePoem exHaiku7 = new ExamplePoem("Koi", "Jennifer Wong", haiku, "https://www.poetryfoundation.org/poems/146992/koi");
        examplePoemStorage.save(exHaiku7);
        ExamplePoem exHaiku8 = new ExamplePoem("Seven Variations of The Same Haiku", "Ariel Banayan", haiku, "https://www.guesthouselit.com/i6-banayan-ariel-poetry");
        examplePoemStorage.save(exHaiku8);
        ExamplePoem exHaiku9 = new ExamplePoem("Suicide's Note", "Langston Hughes", haiku, "https://www.poetryfoundation.org/poems/147906/suicide39s-note");
        examplePoemStorage.save(exHaiku9);
        ExamplePoem exHaiku10 = new ExamplePoem("Small Poems for Big", "Chinaka Hodge", haiku, "https://www.poetryfoundation.org/poetrymagazine/poems/58053/small-poems-for-big");
        examplePoemStorage.save(exHaiku10);

        ExamplePoem exSonnet1 = new ExamplePoem("Sonnet (full-court press)", "Olena Kalytiak Davis", sonnet, "https://www.poetryfoundation.org/poems/147665/sonnet-full-court-press");
        examplePoemStorage.save(exSonnet1);
        ExamplePoem exSonnet2 = new ExamplePoem("American Sonnet for My Past and Future Assassin [“Probably twilight makes blackness dangerous”]", "Terrance Hayes", sonnet, "https://www.poetryfoundation.org/poetrymagazine/poems/143916/american-sonnet-for-my-past-and-future-assassin-598dc8f97f34b");
        examplePoemStorage.save(exSonnet2);
        ExamplePoem exSonnet3 = new ExamplePoem("American Sonnet for My Past and Future Assassin [“Inside me is a black-eyed animal”]", "Terrance Hayes", sonnet, "https://www.poetryfoundation.org/poetrymagazine/poems/143916/american-sonnet-for-my-past-and-future-assassin-598dc8f97f34b");
        examplePoemStorage.save(exSonnet3);
        ExamplePoem exSonnet4 = new ExamplePoem("\"When I’d reported to the couple, thus\"", "Bertolt Brecht", sonnet, "https://www.poetryfoundation.org/poetrymagazine/poems/57513/when-id-reported-to-the-couple-thus-56d23b19996b8");
        examplePoemStorage.save(exSonnet4);
        ExamplePoem exSonnet5 = new ExamplePoem("Worth", "Marilyn Nelson", sonnet, "https://www.poetryfoundation.org/poems/57034/worth-56d23a1ec6579");
        examplePoemStorage.save(exSonnet5);
        ExamplePoem exSonnet6 = new ExamplePoem("[When the bed is empty ... ]", "Dawn Lundy Martin", sonnet, "https://www.poetryfoundation.org/poems/56266/when-the-bed-is-empty-");
        examplePoemStorage.save(exSonnet6);
        ExamplePoem exSonnet7 = new ExamplePoem("A Sonnet at The Edge of the Reef", "Craig Santos Perez", sonnet, "https://poems.com/poem/a-sonnet-at-the-edge-of-the-reef/");
        examplePoemStorage.save(exSonnet7);
        ExamplePoem exSonnet8 = new ExamplePoem("Like, Comma, Like", "Kay Gabriel", sonnet, "https://poets.org/poem/comma");
        examplePoemStorage.save(exSonnet8);
        ExamplePoem exSonnet9 = new ExamplePoem("Whoso list to hunt, I know where is an hind", "Thomas Wyatt", sonnet, "https://poets.org/poem/whoso-list-hunt-i-know-where-hind");
        examplePoemStorage.save(exSonnet9);
        ExamplePoem exSonnet10 = new ExamplePoem("The little love-god lying once asleep (Sonnet 154)", "William Shakespeare", sonnet, "https://poets.org/poem/little-love-god-lying-once-asleep-sonnet-154");
        examplePoemStorage.save(exSonnet10);
        ExamplePoem exSonnet11 = new ExamplePoem("In faith, I do not love thee with mine eyes (Sonnet 141)", "William Shakespeare", sonnet, "https://poets.org/poem/faith-i-do-not-love-thee-mine-eyes-sonnet-141");
        examplePoemStorage.save(exSonnet11);
        ExamplePoem exSonnet12 = new ExamplePoem("A Dream Pang", "Robert Frost", sonnet, "https://poets.org/poem/dream-pang");
        examplePoemStorage.save(exSonnet12);
        ExamplePoem exSonnet13 = new ExamplePoem("At the round earth's imagined corners (Holy Sonnet 7)", "John Donne", sonnet, "https://poets.org/poem/round-earths-imagined-corners-holy-sonnet-7");
        examplePoemStorage.save(exSonnet13);
        ExamplePoem exSonnet14 = new ExamplePoem("the sonnet-ballad", "Gwendolyn Brooks", sonnet, "https://poets.org/poem/sonnet-ballad");
        examplePoemStorage.save(exSonnet14);
        ExamplePoem exSonnet15 = new ExamplePoem("RR Lyrae: Matter", "Lyrae Van Clief-Stefanon", sonnet, "https://poets.org/poem/rr-lyrae-matter");
        examplePoemStorage.save(exSonnet15);


        ExamplePoem exVillanelle1 = new ExamplePoem("One Art", "Elizabeth Bishop", villanelle, "https://poets.org/poem/one-art");
        examplePoemStorage.save(exVillanelle1);
        ExamplePoem exVillanelle2 = new ExamplePoem("Zombie Blues Villanelle", "Tim Seibles", villanelle, "https://poets.org/poem/zombie-blues-villanelle");
        examplePoemStorage.save(exVillanelle2);
        ExamplePoem exVillanelle3 = new ExamplePoem("Do not go gentle into that good night", "Dylan Thomas", villanelle, "https://poets.org/poem/do-not-go-gentle-good-night");
        examplePoemStorage.save(exVillanelle3);
        ExamplePoem exVillanelle4 = new ExamplePoem("Testimony: 1968", "Rita Dove", villanelle, "https://poets.org/poem/testimony-1968");
        examplePoemStorage.save(exVillanelle4);
        ExamplePoem exVillanelle5 = new ExamplePoem("Letter to My Blackout", "Maria Hummel", villanelle, "https://www.poetryfoundation.org/poetrymagazine/poems/150043/letter-to-my-blackout");
        examplePoemStorage.save(exVillanelle5);
        ExamplePoem exVillanelle6 = new ExamplePoem("After the Auction, I Bid You Good-Bye", "Aimee Nezhukumatathil", villanelle, "https://www.poetryfoundation.org/poems/56134/after-the-auction-i-bid-you-good-bye");
        examplePoemStorage.save(exVillanelle6);
        ExamplePoem exVillanelle7 = new ExamplePoem("The Waking", "Theodore Roethke", villanelle, "https://www.poetryfoundation.org/poems/43333/the-waking-56d2220f25315");
        examplePoemStorage.save(exVillanelle7);
        ExamplePoem exVillanelle8 = new ExamplePoem("Nursery", "Kiki Petrosino", villanelle, "https://www.poetryfoundation.org/poetrymagazine/poems/92040/nursery");
        examplePoemStorage.save(exVillanelle8);
        ExamplePoem exVillanelle9 = new ExamplePoem("Mad Girl's Love Song", "Sylvia Plath", villanelle, "https://allpoetry.com/Mad-Girl%27s-Love-Song");
        examplePoemStorage.save(exVillanelle9);
        ExamplePoem exVillanelle10 = new ExamplePoem("The Story We Know", "Martha Collins", villanelle, "https://www.poetryfoundation.org/poetrymagazine/browse?contentId=34705");
        examplePoemStorage.save(exVillanelle10);
        ExamplePoem exVillanelle11 = new ExamplePoem("Between the House and the Hill", "Xochiquetzal Candelaria", villanelle, "https://www.poetryfoundation.org/poems/56978/between-the-house-and-the-hill");
        examplePoemStorage.save(exVillanelle11);


        ExamplePoem exSestina1 = new ExamplePoem("Homes", "Charlotte Anna Perkins Gilman", sestina, "https://www.poetryfoundation.org/poems/52089/homes");
        examplePoemStorage.save(exSestina1);
        ExamplePoem exSestina2 = new ExamplePoem("Time Reviews The Ziegfeld Follies Featuring Josephine Baker, 1936", "A. Van Jordan", sestina, "https://poets.org/poem/time-reviews-ziegfeld-follies-featuring-josephine-baker-1936");
        examplePoemStorage.save(exSestina2);
        ExamplePoem exSestina3 = new ExamplePoem("Ethel’s Sestina", "Patricia Smith", sestina, "https://poets.org/poem/ethels-sestina");
        examplePoemStorage.save(exSestina3);
        ExamplePoem exSestina4 = new ExamplePoem("The Painter", "John Ashbery", sestina, "https://www.poetryfoundation.org/poetrymagazine/poems/26810/the-painter");
        examplePoemStorage.save(exSestina4);
        ExamplePoem exSestina5 = new ExamplePoem("If See No End In Is", "Frank Bidart", sestina, "https://www.poetryfoundation.org/poetrymagazine/poems/49826/if-see-no-end-in-is");
        examplePoemStorage.save(exSestina5);
        ExamplePoem exSestina6 = new ExamplePoem("Sestina", "Elizabeth Bishop", sestina, "https://staff.washington.edu/rmcnamar/383/bishop.html");
        examplePoemStorage.save(exSestina6);
        ExamplePoem exSestina7 = new ExamplePoem("A Miracle For Breakfast", "Elizabeth Bishop", sestina, "https://www.poemhunter.com/poem/a-miracle-for-breakfast/");
        examplePoemStorage.save(exSestina7);
        ExamplePoem exSestina8 = new ExamplePoem("Operation Memory", "David Lehman", sestina, "https://poets.org/poem/operation-memory");
        examplePoemStorage.save(exSestina8);
        ExamplePoem exSestina9 = new ExamplePoem("The Mortician in San Francisco", "Randall Mann", sestina, "https://www.poetryfoundation.org/poems/55026/the-mortician-in-san-francisco");
        examplePoemStorage.save(exSestina9);
        ExamplePoem exSestina10 = new ExamplePoem("A sestina for a black girl who does not know how to braid hair", "Raych Jackson", sestina, "https://www.poetryfoundation.org/poetrymagazine/poems/146235/a-sestina-for-a-black-girl-who-does-not-know-how-to-braid-hair");
        examplePoemStorage.save(exSestina10);

        ExamplePoem exPantoum1 = new ExamplePoem("My Brother at 3 A.M.", "Natalie Diaz", pantoum, "https://www.poetryfoundation.org/poems/56355/my-brother-at-3-am");
        examplePoemStorage.save(exPantoum1);
        ExamplePoem exPantoum2 = new ExamplePoem("Halcyon Kitchen", "Kiandra Jimenez", pantoum, "https://www.poetryfoundation.org/poetrymagazine/poems/146237/halcyon-kitchen");
        examplePoemStorage.save(exPantoum2);
        ExamplePoem exPantoum3 = new ExamplePoem("Incident", "Natasha Trethewey", pantoum, "https://www.poetryfoundation.org/poems/55928/incident-56d237f70bd32");
        examplePoemStorage.save(exPantoum3);
        ExamplePoem exPantoum4 = new ExamplePoem("A Ride in the Rain", "Blas Falconer", pantoum, "https://www.poetryfoundation.org/poems/53867/a-ride-in-the-rain");
        examplePoemStorage.save(exPantoum4);
        ExamplePoem exPantoum5 = new ExamplePoem("Descent of the Composer", "Airea D. Matthews", pantoum, "https://poets.org/poem/descent-composer");
        examplePoemStorage.save(exPantoum5);
        ExamplePoem exPantoum6 = new ExamplePoem("Overnight", "John Yau", pantoum, "https://poets.org/poem/overnight");
        examplePoemStorage.save(exPantoum6);
        ExamplePoem exPantoum7 = new ExamplePoem("Lawless Pantoum", "Denise Duhamel", pantoum, "https://poets.org/poem/lawless-pantoum");
        examplePoemStorage.save(exPantoum7);
        ExamplePoem exPantoum8 = new ExamplePoem("Harmonie du soir", "Charles Baudelaire", pantoum, "https://fleursdumal.org/poem/142");
        examplePoemStorage.save(exPantoum8);
        ExamplePoem exPantoum9 = new ExamplePoem("Pantoum of the Great Depression", "Donald Justice", pantoum, "https://www.washingtonpost.com/wp-srv/style/books/features/19980920.htm");
        examplePoemStorage.save(exPantoum9);
        ExamplePoem exPantoum10 = new ExamplePoem("Parent's Pantoum", "Carolyn Kizer", pantoum, "https://poets.org/poem/parents-pantoum");
        examplePoemStorage.save(exPantoum10);
        ExamplePoem exPantoum11 = new ExamplePoem("September Elegies", "Randall Mann", pantoum, "https://poets.org/poem/september-elegies");
        examplePoemStorage.save(exPantoum11);

        ExamplePoem exGhazal1 = new ExamplePoem("Ghareeb", "Fatimah Asghar", ghazal, "https://poets.org/poem/ghareeb");
        examplePoemStorage.save(exGhazal1);
        ExamplePoem exGhazal2 = new ExamplePoem("how to say", "Safia Elhillo", ghazal, "https://poets.org/poem/how-say");
        examplePoemStorage.save(exGhazal2);
        ExamplePoem exGhazal3 = new ExamplePoem("Ghazal of the Better-Unbegun", "Heather McHugh", ghazal, "https://poets.org/poem/ghazal-better-unbegun");
        examplePoemStorage.save(exGhazal3);
        ExamplePoem exGhazal4 = new ExamplePoem("Vindication", "Claudia Castro Luna", ghazal, "https://poets.org/poem/vindication");
        examplePoemStorage.save(exGhazal4);
        ExamplePoem exGhazal5 = new ExamplePoem("Infinity Ghazal Beginning with Lice and Never Ending with Lies", "Tarfia Faizullah", ghazal, "https://www.poetryfoundation.org/poetrymagazine/poems/148372/infinity-ghazal-beginning-with-lice-and-never-ending-with-lies");
        examplePoemStorage.save(exGhazal5);
        ExamplePoem exGhazal6 = new ExamplePoem("Miscegenation", "Natasha Trethewey", ghazal, "https://www.poetryfoundation.org/poems/55929/miscegenation-56d237f78238f");
        examplePoemStorage.save(exGhazal6);
        ExamplePoem exGhazal7 = new ExamplePoem("Rain", "Kazim Ali", ghazal, "https://www.poetryfoundation.org/poems/54262/rain-56d23467ac47f");
        examplePoemStorage.save(exGhazal7);
        ExamplePoem exGhazal8 = new ExamplePoem("Hip-Hop Ghazal", "Patricia Smith", ghazal, "https://www.poetryfoundation.org/poetrymagazine/poems/49642/hip-hop-ghazal");
        examplePoemStorage.save(exGhazal8);
        ExamplePoem exGhazal9 = new ExamplePoem("Ghazal", "Agha Shahid Ali", ghazal, "https://www.poetryfoundation.org/poems/43279/ghazal-56d221fe8a756");
        examplePoemStorage.save(exGhazal9);
        ExamplePoem exGhazal10 = new ExamplePoem("Ghazal of the Polar Vortex", "Brian Brodeur", ghazal, "https://poems.com/poem/ghazal-of-the-polar-vortex/");
        examplePoemStorage.save(exGhazal10);
        ExamplePoem exGhazal11 = new ExamplePoem("Ghazal Ya Lateef!", "Marilyn Hacker", ghazal, "https://poets.org/poem/ghazal-ya-ltyf-ya-lateef");
        examplePoemStorage.save(exGhazal11);  
}
