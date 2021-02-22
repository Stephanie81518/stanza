package stanzafinalproject.demo.storage;

import org.springframework.stereotype.Service;
import stanzafinalproject.demo.resources.UserPoem;

import javax.annotation.Resource;

@Service
public class UserPoemStorage {

    @Resource
    private UserPoemRepository userPoemRepo;

    public void addUserPoem(UserPoem userPoem){
        userPoemRepo.save(userPoem);
    }

    public Iterable<UserPoem> retrieveAllUserPoems (){
        return userPoemRepo.findAll();
    }

    public UserPoem retrieveUserPoemById(Long id){
        return userPoemRepo.findById(id).get();
    }


}
