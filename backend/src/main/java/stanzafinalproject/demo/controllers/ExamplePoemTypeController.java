package stanzafinalproject.demo.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import stanzafinalproject.demo.resources.ExamplePoemType;
import stanzafinalproject.demo.services.ExamplePoemTypeService;

@RestController
@RequestMapping("/api/examplepoemtype")
public class ExamplePoemTypeController {

    private ExamplePoemTypeService examplePoemTypeService;

    public ExamplePoemTypeController(ExamplePoemTypeService examplePoemTypeService) {
        this.examplePoemTypeService = examplePoemTypeService;
    }

    @GetMapping("")
    public Iterable<ExamplePoemType> retrieveAllExamplePoemTypes() {
        return examplePoemTypeService.retrieveAllExamplePoemTypes();
    }

   /* @GetMapping("/{id}")
    public*/
}
