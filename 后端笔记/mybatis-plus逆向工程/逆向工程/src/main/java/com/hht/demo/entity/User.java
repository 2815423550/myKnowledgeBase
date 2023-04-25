package .com.hht.demo.entity;

    import java.io.Serializable;
    import lombok.Data;
    import lombok.EqualsAndHashCode;
    import lombok.experimental.Accessors;

/**
* <p>
    * 
    * </p>
*
* @author 黄华弢
* @since 2022-04-16
*/
    @Data
        @EqualsAndHashCode(callSuper = false)
    @Accessors(chain = true)
    public class User implements Serializable {

    private static final long serialVersionUID = 1L;

            /**
            * 账号
            */
    private Long username;

            /**
            * 密码
            */
    private String password;


}
