package .com.hht.demo.service.impl;

import .com.hht.demo.entity.User;
import .com.hht.demo.mapper.UserMapper;
import .com.hht.demo.service.IUserService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author 黄华弢
 * @since 2022-04-16
 */
@Service
public class UserServiceImpl extends ServiceImpl<UserMapper, User> implements IUserService {

}
