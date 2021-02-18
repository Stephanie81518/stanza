package stanzafinalproject.demo;

import org.hibernate.criterion.Example;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import stanzafinalproject.demo.resources.ExamplePoem;
import stanzafinalproject.demo.resources.ExamplePoemType;
import stanzafinalproject.demo.services.ExamplePoemRepository;
import stanzafinalproject.demo.services.ExamplePoemService;
import stanzafinalproject.demo.services.ExamplePoemTypeRepository;
import stanzafinalproject.demo.services.ExamplePoemTypeService;

import javax.annotation.Resource;

@Component
public class ExamplePoemPopulator implements CommandLineRunner {

    private ExamplePoemService examplePoemService;
    private ExamplePoemTypeService examplePoemTypeService;

    public ExamplePoemPopulator(ExamplePoemService examplePoemService, ExamplePoemTypeService examplePoemTypeService) {
        this.examplePoemService = examplePoemService;
        this.examplePoemTypeService = examplePoemTypeService;
    }

    @Resource
    private ExamplePoemTypeRepository examplePoemTypeRepo;

    @Override
    public void run(String... args) throws Exception {

        //adding poem types to repository
        ExamplePoemType haiku = new ExamplePoemType("Haiku");
        examplePoemTypeService.addExamplePoemType(haiku);
        examplePoemTypeRepo.save(haiku);
        ExamplePoemType sonnet = new ExamplePoemType("Sonnet");
        examplePoemTypeService.addExamplePoemType(sonnet);
        examplePoemTypeRepo.save(sonnet);
        ExamplePoemType villanelle = new ExamplePoemType("Villanelle");
        examplePoemTypeService.addExamplePoemType(villanelle);
        examplePoemTypeRepo.save(villanelle);
        ExamplePoemType sestina = new ExamplePoemType("Sestina");
        examplePoemTypeService.addExamplePoemType(sestina);
        examplePoemTypeRepo.save(sestina);
        ExamplePoemType pantoum = new ExamplePoemType("Pantoum");
        examplePoemTypeService.addExamplePoemType(pantoum);
        examplePoemTypeRepo.save(pantoum);
        ExamplePoemType ghazal = new ExamplePoemType("Ghazal");
        examplePoemTypeService.addExamplePoemType(ghazal);
        examplePoemTypeRepo.save(ghazal);


        //adding example poems to api
        ExamplePoem exHaiku1 = new ExamplePoem("Haiku", "Etheridge Knight", haiku, "https://www.poetryfoundation.org/poems/47593/haiku");
        examplePoemService.save(exHaiku1);
        ExamplePoem exHaiku2 = new ExamplePoem("[The cry of the cicada]", "Matsuo Basho", haiku, "https://poets.org/poem/cry-cicada");
        examplePoemService.save(exHaiku2);
        ExamplePoem exHaiku3 = new ExamplePoem("Blind Boone’s Apparitions", "Tyehimba Jess", haiku, "https://poets.org/poem/blind-boones-apparitions");
        examplePoemService.save(exHaiku3);
        ExamplePoem exHaiku4 = new ExamplePoem("5 & 7 & 5", "Anselm Hollo", haiku, "https://poets.org/poem/5-7-5");
        examplePoemService.save(exHaiku4);
        ExamplePoem exHaiku5 = new ExamplePoem("[i am moving in]", "Sonia Sanchez", haiku, "https://poets.org/poem/haiku-i-am-moving");
        examplePoemService.save(exHaiku5);
        ExamplePoem exHaiku6 = new ExamplePoem("scent of orange blossoms: haiku/senryu", "Teresa Mei Chuc", haiku, "https://www.poetryfoundation.org/poems/148341/scent-of-orange-blossoms-haiku-senryu");
        examplePoemService.save(exHaiku6);
        ExamplePoem exHaiku7 = new ExamplePoem("Koi", "Jennifer Wong", haiku, "https://www.poetryfoundation.org/poems/146992/koi");
        examplePoemService.save(exHaiku7);
        ExamplePoem exHaiku8 = new ExamplePoem("Seven Variations of The Same Haiku", "Ariel Banayan", haiku, "https://www.guesthouselit.com/i6-banayan-ariel-poetry");
        examplePoemService.save(exHaiku8);
        ExamplePoem exHaiku9 = new ExamplePoem("Suicide's Note", "Langston Hughes", haiku, "https://www.poetryfoundation.org/poems/147906/suicide39s-note");
        examplePoemService.save(exHaiku9);
        ExamplePoem exHaiku10 = new ExamplePoem("Small Poems for Big", "Chinaka Hodge", haiku, "https://www.poetryfoundation.org/poetrymagazine/poems/58053/small-poems-for-big");
        examplePoemService.save(exHaiku10);


        ExamplePoem exSonnet1 = new ExamplePoem("Sonnet (full-court press)", "Olena Kalytiak Davis", sonnet, "https://www.poetryfoundation.org/poems/147665/sonnet-full-court-press");
        examplePoemService.save(exSonnet1);
        ExamplePoem exSonnet2 = new ExamplePoem("American Sonnet for My Past and Future Assassin [“Probably twilight makes blackness dangerous”]", "Terrance Hayes", sonnet, "https://www.poetryfoundation.org/poetrymagazine/poems/143916/american-sonnet-for-my-past-and-future-assassin-598dc8f97f34b");
        examplePoemService.save(exSonnet2);
        ExamplePoem exSonnet3 = new ExamplePoem("American Sonnet for My Past and Future Assassin [“Inside me is a black-eyed animal”]", "Terrance Hayes", sonnet, "https://www.poetryfoundation.org/poetrymagazine/poems/143916/american-sonnet-for-my-past-and-future-assassin-598dc8f97f34b");
        examplePoemService.save(exSonnet3);
        ExamplePoem exSonnet4 = new ExamplePoem("\"When I’d reported to the couple, thus\"", "Bertolt Brecht", sonnet, "https://www.poetryfoundation.org/poetrymagazine/poems/57513/when-id-reported-to-the-couple-thus-56d23b19996b8");
        examplePoemService.save(exSonnet4);
        ExamplePoem exSonnet5 = new ExamplePoem("Worth", "Marilyn Nelson", sonnet, "https://www.poetryfoundation.org/poems/57034/worth-56d23a1ec6579");
        examplePoemService.save(exSonnet5);
        ExamplePoem exSonnet6 = new ExamplePoem("[When the bed is empty ... ]", "Dawn Lundy Martin", sonnet, "https://www.poetryfoundation.org/poems/56266/when-the-bed-is-empty-");
        examplePoemService.save(exSonnet6);
        ExamplePoem exSonnet7 = new ExamplePoem("A Sonnet at The Edge of the Reef", "Craig Santos Perez", sonnet, "https://poems.com/poem/a-sonnet-at-the-edge-of-the-reef/");
        examplePoemService.save(exSonnet7);
        ExamplePoem exSonnet8 = new ExamplePoem("Like, Comma, Like", "Kay Gabriel", sonnet, "https://poets.org/poem/comma");
        examplePoemService.save(exSonnet8);
        ExamplePoem exSonnet9 = new ExamplePoem("Whoso list to hunt, I know where is an hind", "Thomas Wyatt", sonnet, "https://poets.org/poem/whoso-list-hunt-i-know-where-hind");
        examplePoemService.save(exSonnet9);
        ExamplePoem exSonnet10 = new ExamplePoem("The little love-god lying once asleep (Sonnet 154)", "William Shakespeare", sonnet, "https://poets.org/poem/little-love-god-lying-once-asleep-sonnet-154");
        examplePoemService.save(exSonnet10);
        ExamplePoem exSonnet11 = new ExamplePoem("In faith, I do not love thee with mine eyes (Sonnet 141)", "William Shakespeare", sonnet, "https://poets.org/poem/faith-i-do-not-love-thee-mine-eyes-sonnet-141");
        examplePoemService.save(exSonnet11);
        ExamplePoem exSonnet12 = new ExamplePoem("A Dream Pang", "Robert Frost", sonnet, "https://poets.org/poem/dream-pang");
        examplePoemService.save(exSonnet12);
        ExamplePoem exSonnet13 = new ExamplePoem("At the round earth's imagined corners (Holy Sonnet 7)", "John Donne", sonnet, "https://poets.org/poem/round-earths-imagined-corners-holy-sonnet-7");
        examplePoemService.save(exSonnet13);
        ExamplePoem exSonnet14 = new ExamplePoem("the sonnet-ballad", "Gwendolyn Brooks", sonnet, "https://poets.org/poem/sonnet-ballad");
        examplePoemService.save(exSonnet14);
        ExamplePoem exSonnet15 = new ExamplePoem("RR Lyrae: Matter", "Lyrae Van Clief-Stefanon", sonnet, "https://poets.org/poem/rr-lyrae-matter");
        examplePoemService.save(exSonnet15);


        ExamplePoem exVillanelle1 = new ExamplePoem("One Art", "Elizabeth Bishop", villanelle, "https://poets.org/poem/one-art");
        examplePoemService.save(exVillanelle1);
        ExamplePoem exVillanelle2 = new ExamplePoem("Zombie Blues Villanelle", "Tim Seibles", villanelle, "https://poets.org/poem/zombie-blues-villanelle");
        examplePoemService.save(exVillanelle2);
        ExamplePoem exVillanelle3 = new ExamplePoem("Do not go gentle into that good night", "Dylan Thomas", villanelle, "https://poets.org/poem/do-not-go-gentle-good-night");
        examplePoemService.save(exVillanelle3);
        ExamplePoem exVillanelle4 = new ExamplePoem("Testimony: 1968", "Rita Dove", villanelle, "https://poets.org/poem/testimony-1968");
        examplePoemService.save(exVillanelle4);
        ExamplePoem exVillanelle5 = new ExamplePoem("Letter to My Blackout", "Maria Hummel", villanelle, "https://www.poetryfoundation.org/poetrymagazine/poems/150043/letter-to-my-blackout");
        examplePoemService.save(exVillanelle5);
        ExamplePoem exVillanelle6 = new ExamplePoem("After the Auction, I Bid You Good-Bye", "Aimee Nezhukumatathil", villanelle, "https://www.poetryfoundation.org/poems/56134/after-the-auction-i-bid-you-good-bye");
        examplePoemService.save(exVillanelle6);
        ExamplePoem exVillanelle7 = new ExamplePoem("The Waking", "Theodore Roethke", villanelle, "https://www.poetryfoundation.org/poems/43333/the-waking-56d2220f25315");
        examplePoemService.save(exVillanelle7);
        ExamplePoem exVillanelle8 = new ExamplePoem("Nursery", "Kiki Petrosino", villanelle, "https://www.poetryfoundation.org/poetrymagazine/poems/92040/nursery");
        examplePoemService.save(exVillanelle8);
        ExamplePoem exVillanelle9 = new ExamplePoem("Mad Girl's Love Song", "Sylvia Plath", villanelle, "https://allpoetry.com/Mad-Girl%27s-Love-Song");
        examplePoemService.save(exVillanelle9);
        ExamplePoem exVillanelle10 = new ExamplePoem("The Story We Know", "Martha Collins", villanelle, "https://www.poetryfoundation.org/poetrymagazine/browse?contentId=34705");
        examplePoemService.save(exVillanelle10);
        ExamplePoem exVillanelle11 = new ExamplePoem("Between the House and the Hill", "Xochiquetzal Candelaria", villanelle, "https://www.poetryfoundation.org/poems/56978/between-the-house-and-the-hill");
        examplePoemService.save(exVillanelle11);


        ExamplePoem exSestina1 = new ExamplePoem("Homes", "Charlotte Anna Perkins Gilman", sestina, "https://www.poetryfoundation.org/poems/52089/homes");
        examplePoemService.save(exSestina1);
        ExamplePoem exSestina2 = new ExamplePoem("Time Reviews The Ziegfeld Follies Featuring Josephine Baker, 1936", "A. Van Jordan", sestina, "https://poets.org/poem/time-reviews-ziegfeld-follies-featuring-josephine-baker-1936");
        examplePoemService.save(exSestina2);
        ExamplePoem exSestina3 = new ExamplePoem("Ethel’s Sestina", "Patricia Smith", sestina, "https://poets.org/poem/ethels-sestina");
        examplePoemService.save(exSestina3);
        ExamplePoem exSestina4 = new ExamplePoem("The Painter", "John Ashbery", sestina, "https://www.poetryfoundation.org/poetrymagazine/poems/26810/the-painter");
        examplePoemService.save(exSestina4);
        ExamplePoem exSestina5 = new ExamplePoem("If See No End In Is", "Frank Bidart", sestina, "https://www.poetryfoundation.org/poetrymagazine/poems/49826/if-see-no-end-in-is");
        examplePoemService.save(exSestina5);
        ExamplePoem exSestina6 = new ExamplePoem("Sestina", "Elizabeth Bishop", sestina, "https://staff.washington.edu/rmcnamar/383/bishop.html");
        examplePoemService.save(exSestina6);
        ExamplePoem exSestina7 = new ExamplePoem("A Miracle For Breakfast", "Elizabeth Bishop", sestina, "https://www.poemhunter.com/poem/a-miracle-for-breakfast/");
        examplePoemService.save(exSestina7);
        ExamplePoem exSestina8 = new ExamplePoem("Operation Memory", "David Lehman", sestina, "https://poets.org/poem/operation-memory");
        examplePoemService.save(exSestina8);
        ExamplePoem exSestina9 = new ExamplePoem("The Mortician in San Francisco", "Randall Mann", sestina, "https://www.poetryfoundation.org/poems/55026/the-mortician-in-san-francisco");
        examplePoemService.save(exSestina9);
        ExamplePoem exSestina10 = new ExamplePoem("A sestina for a black girl who does not know how to braid hair", "Raych Jackson", sestina, "https://www.poetryfoundation.org/poetrymagazine/poems/146235/a-sestina-for-a-black-girl-who-does-not-know-how-to-braid-hair");
        examplePoemService.save(exSestina10);

        ExamplePoem exPantoum1 = new ExamplePoem("My Brother at 3 A.M.", "Natalie Diaz", pantoum, "https://www.poetryfoundation.org/poems/56355/my-brother-at-3-am");
        examplePoemService.save(exPantoum1);
        ExamplePoem exPantoum2 = new ExamplePoem("Halcyon Kitchen", "Kiandra Jimenez", pantoum, "https://www.poetryfoundation.org/poetrymagazine/poems/146237/halcyon-kitchen");
        examplePoemService.save(exPantoum2);
        ExamplePoem exPantoum3 = new ExamplePoem("Incident", "Natasha Trethewey", pantoum, "https://www.poetryfoundation.org/poems/55928/incident-56d237f70bd32");
        examplePoemService.save(exPantoum3);
        ExamplePoem exPantoum4 = new ExamplePoem("A Ride in the Rain", "Blas Falconer", pantoum, "https://www.poetryfoundation.org/poems/53867/a-ride-in-the-rain");
        examplePoemService.save(exPantoum4);
        ExamplePoem exPantoum5 = new ExamplePoem("Descent of the Composer", "Airea D. Matthews", pantoum, "https://poets.org/poem/descent-composer");
        examplePoemService.save(exPantoum5);
        ExamplePoem exPantoum6 = new ExamplePoem("Overnight", "John Yau", pantoum, "https://poets.org/poem/overnight");
        examplePoemService.save(exPantoum6);
        ExamplePoem exPantoum7 = new ExamplePoem("Lawless Pantoum", "Denise Duhamel", pantoum, "https://poets.org/poem/lawless-pantoum");
        examplePoemService.save(exPantoum7);
        ExamplePoem exPantoum8 = new ExamplePoem("Harmonie du soir", "Charles Baudelaire", pantoum, "https://fleursdumal.org/poem/142");
        examplePoemService.save(exPantoum8);
        ExamplePoem exPantoum9 = new ExamplePoem("Pantoum of the Great Depression", "Donald Justice", pantoum, "https://www.washingtonpost.com/wp-srv/style/books/features/19980920.htm");
        examplePoemService.save(exPantoum9);
        ExamplePoem exPantoum10 = new ExamplePoem("Parent's Pantoum", "Carolyn Kizer", pantoum, "https://poets.org/poem/parents-pantoum");
        examplePoemService.save(exPantoum10);
        ExamplePoem exPantoum11 = new ExamplePoem("September Elegies", "Randall Mann", pantoum, "https://poets.org/poem/september-elegies");
        examplePoemService.save(exPantoum11);

        ExamplePoem exGhazal1 = new ExamplePoem("Ghareeb", "Fatimah Asghar", ghazal, "https://poets.org/poem/ghareeb");
        examplePoemService.save(exGhazal1);
        ExamplePoem exGhazal2 = new ExamplePoem("how to say", "Safia Elhillo", ghazal, "https://poets.org/poem/how-say");
        examplePoemService.save(exGhazal2);
        ExamplePoem exGhazal3 = new ExamplePoem("Ghazal of the Better-Unbegun", "Heather McHugh", ghazal, "https://poets.org/poem/ghazal-better-unbegun");
        examplePoemService.save(exGhazal3);
        ExamplePoem exGhazal4 = new ExamplePoem("Vindication", "Claudia Castro Luna", ghazal, "https://poets.org/poem/vindication");
        examplePoemService.save(exGhazal4);
        ExamplePoem exGhazal5 = new ExamplePoem("Infinity Ghazal Beginning with Lice and Never Ending with Lies", "Tarfia Faizullah", ghazal, "https://www.poetryfoundation.org/poetrymagazine/poems/148372/infinity-ghazal-beginning-with-lice-and-never-ending-with-lies");
        examplePoemService.save(exGhazal5);
        ExamplePoem exGhazal6 = new ExamplePoem("Miscegenation", "Natasha Trethewey", ghazal, "https://www.poetryfoundation.org/poems/55929/miscegenation-56d237f78238f");
        examplePoemService.save(exGhazal6);
        ExamplePoem exGhazal7 = new ExamplePoem("Rain", "Kazim Ali", ghazal, "https://www.poetryfoundation.org/poems/54262/rain-56d23467ac47f");
        examplePoemService.save(exGhazal7);
        ExamplePoem exGhazal8 = new ExamplePoem("Hip-Hop Ghazal", "Patricia Smith", ghazal, "https://www.poetryfoundation.org/poetrymagazine/poems/49642/hip-hop-ghazal");
        examplePoemService.save(exGhazal8);
        ExamplePoem exGhazal9 = new ExamplePoem("Ghazal", "Agha Shahid Ali", ghazal, "https://www.poetryfoundation.org/poems/43279/ghazal-56d221fe8a756");
        examplePoemService.save(exGhazal9);
        ExamplePoem exGhazal10 = new ExamplePoem("Ghazal of the Polar Vortex", "Brian Brodeur", ghazal, "https://poems.com/poem/ghazal-of-the-polar-vortex/");
        examplePoemService.save(exGhazal10);
        ExamplePoem exGhazal11 = new ExamplePoem("Ghazal Ya Lateef!", "Marilyn Hacker", ghazal, "https://poets.org/poem/ghazal-ya-ltyf-ya-lateef");
        examplePoemService.save(exGhazal11);
















    }
}
