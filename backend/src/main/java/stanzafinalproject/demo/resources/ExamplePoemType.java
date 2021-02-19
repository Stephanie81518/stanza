package stanzafinalproject.demo.resources;

import javax.persistence.*;
import java.util.Collection;
import java.util.List;

@Entity
public class ExamplePoemType {

    @Id
    @GeneratedValue
    private Long id;
    private String typeName;
    @OneToMany(mappedBy = "examplePoemType")
    private Collection<ExamplePoem> examplePoem;


    public ExamplePoemType(String typeName, ExamplePoem... examplePoem) {
        this.typeName = typeName;
        this.examplePoem = List.of(examplePoem);
    }

    public ExamplePoemType() {
    }

    public Long getId() {
        return id;
    }

    public String getTypeName() {
        return typeName;
    }

    @Override
    public String toString() {
        return "ExamplePoemType{" +
                "id=" + id +
                ", typeName='" + typeName + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        ExamplePoemType that = (ExamplePoemType) o;

        if (id != null ? !id.equals(that.id) : that.id != null) return false;
        return typeName != null ? typeName.equals(that.typeName) : that.typeName == null;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (typeName != null ? typeName.hashCode() : 0);
        return result;
    }
}
