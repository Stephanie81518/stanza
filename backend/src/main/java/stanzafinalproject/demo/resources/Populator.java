package stanzafinalproject.demo.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class Populator implements CommandLineRunner {
    @Autowired
    PoemRepository poemRepo;


    @Override
    public void run(String... args) throws Exception {
        Poems testPoems1 = new Poems("Dylon","dylon's amazing poem","haiku");
        Poems testPoems2 = new Poems("Tara","tara's amazing poem","haiku");
        poemRepo.save(testPoems1);
        poemRepo.save(testPoems2);
    }


}
