package stanzafinalproject.demo.resources;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PoemController {
    PoemRepository poemRepo;


    public PoemController(PoemRepository poemRepo) {
        this.poemRepo = poemRepo;
    }

    @GetMapping("/api/poems")
    public Iterable<Poems> retrieveAllPoems(){
        return poemRepo.findAll();
    }

    @GetMapping("api/poems/{id}")
    public Poems retrievePoemsById(@PathVariable Long id){
        return poemRepo.findById(id).get();
    }
}
