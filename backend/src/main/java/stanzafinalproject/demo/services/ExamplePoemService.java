package stanzafinalproject.demo.services;

import org.springframework.stereotype.Service;
import stanzafinalproject.demo.resources.ExamplePoem;

@Service
public class ExamplePoemService {
    private ExamplePoemRepository examplePoemRepo;

    public ExamplePoemService(ExamplePoemRepository poemApiRepo) {
        this.examplePoemRepo = poemApiRepo;
    }

    public Iterable<ExamplePoem> retrieveAllExamplePoems() {
        return examplePoemRepo.findAll();
    }

    public void save(ExamplePoem examplePoem) {
        examplePoemRepo.save(examplePoem);
    }
}
