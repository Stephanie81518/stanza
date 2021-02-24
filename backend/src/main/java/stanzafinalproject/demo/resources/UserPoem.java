package stanzafinalproject.demo.resources;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import java.util.Objects;

@Entity
public class UserPoem {

    @Id
    @GeneratedValue
    private Long id;
    private String poetName;
    private String userName;
    private String title;
    @Lob
    private String poemContent;

    public UserPoem(String poetName, String title, String poemContent, String userName) {
        this.poetName = poetName;
        this.title = title;
        this.poemContent = poemContent;
        this.userName = userName;
    }

    public UserPoem() {

    }

    public Long getId() {
        return id;
    }

    public String getPoetName() {
        return poetName;
    }

    public String getTitle() {
        return title;
    }

    public String getPoemContent() {
        return poemContent;
    }

    public String getUserName() {
        return userName;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserPoem userPoem = (UserPoem) o;
        return Objects.equals(id, userPoem.id) && Objects.equals(poetName, userPoem.poetName) && Objects.equals(userName, userPoem.userName) && Objects.equals(title, userPoem.title) && Objects.equals(poemContent, userPoem.poemContent);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, poetName, userName, title, poemContent);
    }
}
