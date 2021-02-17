package stanzafinalproject.demo.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import stanzafinalproject.demo.resources.ExamplePoem;
import stanzafinalproject.demo.services.ExamplePoemService;

@RestController
@RequestMapping("/api/examplepoems")
public class ExamplePoemController {
    private ExamplePoemService examplePoemService;

    public ExamplePoemController(ExamplePoemService examplePoemService) {
        this.examplePoemService = examplePoemService;
    }

    @GetMapping("")
    public Iterable<ExamplePoem> retrieveAllExamplePoems() {
        return examplePoemService.retrieveAllExamplePoems();
    }


}