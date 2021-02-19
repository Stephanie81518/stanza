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

        ExamplePoem exVillanelle1 = new ExamplePoem("One Art", "Elizabeth Bishop", villanelle, "https://poets.org/poem/one-art");
        examplePoemStorage.save(exVillanelle1);

        ExamplePoem exSonnet1 = new ExamplePoem("Sonnet (full-court press)", "Olena Kalytiak Davis", sonnet, "https://www.poetryfoundation.org/poems/147665/sonnet-full-court-press");
        examplePoemStorage.save(exSonnet1);
    }
}
