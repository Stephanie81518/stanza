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
        ExamplePoemType haiku = new ExamplePoemType("Haiku");
        examplePoemTypeStorage.addExamplePoemType(haiku);
        examplePoemTypeRepo.save(haiku);
        ExamplePoemType sonnet = new ExamplePoemType("Sonnet");
        examplePoemTypeStorage.addExamplePoemType(sonnet);
        examplePoemTypeRepo.save(sonnet);
        ExamplePoemType villanelle = new ExamplePoemType("Villanelle");
        examplePoemTypeStorage.addExamplePoemType(villanelle);
        examplePoemTypeRepo.save(villanelle);
        ExamplePoemType sestina = new ExamplePoemType("Sestina");
        examplePoemTypeStorage.addExamplePoemType(sestina);
        examplePoemTypeRepo.save(sestina);
        ExamplePoemType pantoum = new ExamplePoemType("Pantoum");
        examplePoemTypeStorage.addExamplePoemType(pantoum);
        examplePoemTypeRepo.save(pantoum);
        ExamplePoemType ghazal = new ExamplePoemType("Ghazal");
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
