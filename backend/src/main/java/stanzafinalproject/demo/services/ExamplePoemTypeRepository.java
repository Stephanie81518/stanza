package stanzafinalproject.demo.services;

import org.springframework.data.repository.CrudRepository;
import stanzafinalproject.demo.resources.ExamplePoemType;

public interface ExamplePoemTypeRepository extends CrudRepository<ExamplePoemType, Long> {
}
