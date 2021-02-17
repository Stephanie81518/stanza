package stanzafinalproject.demo.services;

import org.springframework.data.repository.CrudRepository;
import stanzafinalproject.demo.resources.ExamplePoem;

public interface ExamplePoemRepository extends CrudRepository<ExamplePoem, Long> {
}
