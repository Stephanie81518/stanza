package stanzafinalproject.demo.controllers;

import org.springframework.web.bind.annotation.*;
import stanzafinalproject.demo.resources.User;
import stanzafinalproject.demo.resources.UserPoem;
import stanzafinalproject.demo.storage.UserPoemStorage;

@RestController
@RequestMapping("/api/userpoems")
public class UserPoemController {
    private UserPoemStorage userPoemStorage;

    public UserPoemController(UserPoemStorage userPoemStorage) {
        this.userPoemStorage = userPoemStorage;
    }

    @GetMapping("")
    public Iterable<UserPoem> retrieveAllUserPoems() {
        return userPoemStorage.retrieveAllUserPoems();
    }

    @GetMapping("/{id}")
    public UserPoem retrieveUserPoemById(@PathVariable Long id){
        return userPoemStorage.retrieveUserPoemById(id);
    }

    @PostMapping("")
    public UserPoem postUserPoems(@RequestBody UserPoem poemToAdd){
        userPoemStorage.addUserPoem(poemToAdd);
        return poemToAdd;
    }

    @DeleteMapping("/{id}")
    public void deleteUserPoem(@PathVariable Long id){
        userPoemStorage.removeUserPoem(id);
    }

    @PutMapping(value = "")
    public UserPoem updateUserPoem(@RequestBody UserPoem userPoem){
        if( userPoem.getId() != null){
            userPoemStorage.addUserPoem(userPoem);
        }
        return userPoem;
    }

    @PatchMapping("/{id}")
    public UserPoem addPoemToUser(@RequestBody UserPoem poemToAdd, @PathVariable Long id){
        UserPoem tempUserPoem = userPoemStorage.retrieveUserPoemById(id);
        userPoemStorage.addUserPoem(poemToAdd);
        return tempUserPoem;
    }

}
