package sn.ucad.jwtkey.security;

import java.util.Optional;
import org.springframework.data.domain.AuditorAware;
import org.springframework.stereotype.Component;
import sn.ucad.jwtkey.config.Constants;

/**
 * Implementation of {@link AuditorAware} based on Spring Security.
 */
@Component
public class SpringSecurityAuditorAware implements AuditorAware<String> {

    @Override
    public Optional<String> getCurrentAuditor() {
        // return Optional.of(SecurityUtils.getCurrentUserLogin().orElse(Constants.SYSTEM));
        return Optional.empty();
    }
}
