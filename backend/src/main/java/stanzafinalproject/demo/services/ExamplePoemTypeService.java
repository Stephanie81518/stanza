package stanzafinalproject.demo.services;

import org.springframework.stereotype.Service;
import stanzafinalproject.demo.resources.ExamplePoem;
import stanzafinalproject.demo.resources.ExamplePoemType;

import javax.annotation.Resource;

@Service
public class ExamplePoemTypeService {

    @Resource
    private ExamplePoemTypeRepository examplePoemTypeRepo;

    public void addExamplePoemType(ExamplePoemType examplePoemTypeToAdd) {
        examplePoemTypeRepo.save(examplePoemTypeToAdd);
    }

    public Iterable<ExamplePoemType> retrieveAllExamplePoemTypes() {
        return examplePoemTypeRepo.findAll();
    }
}
