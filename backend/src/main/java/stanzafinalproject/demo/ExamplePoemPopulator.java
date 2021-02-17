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

        ExamplePoem exVillanelle1 = new ExamplePoem("One Art", "Elizabeth Bishop", villanelle, "https://poets.org/poem/one-art");
        examplePoemService.save(exVillanelle1);

        ExamplePoem exSonnet1 = new ExamplePoem("Sonnet (full-court press)", "Olena Kalytiak Davis", sonnet, "https://www.poetryfoundation.org/poems/147665/sonnet-full-court-press");
        examplePoemService.save(exSonnet1);
    }
}
