package stanzafinalproject.demo.resources;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Poems {
    private String poet;
    private String title;
    private String form;
    @Id
    private int id;

    public Poems(String poet, String title, String form) {
        this.poet = poet;
        this.title = title;
        this.form = form;
    }

    public Poems() {

    }
}
