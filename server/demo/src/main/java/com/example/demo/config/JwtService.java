package com.example.demo.config;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.*;
import java.util.function.Function;

import io.jsonwebtoken.Jwts;

@Service
@RequiredArgsConstructor
public class JwtService {


    private static final String SECRET_KEY = "c6VgokXtwMDpoWODBP0TY1Zvy1HsNAaulPtDHBdwQSE2sLQ3Ob8IJaEZ5Wu54lbqruqMiZ2y7nncb7MO33hRLHyNrZ9NSjnHCnexK6EYJVvFSObTc3qpFcIt6gGe8CaggjRNkrzLRc8xa7Mt1BdoBifQxXoh0NmfPc5ZLR8Uc9DRX0udHMbRBNrtQHnQFDn3jesXMTWuuOTtNZBok5wy4PsYyoE7LcHOHdG1qwKCnlBLdcTnX0pzniSKuEHzptvv";
    private static final long EXPIRATION_TIME = 864_000_000; // 10 days in milliseconds


    public String generateToken(UserDetails userDetails) {
        return generateToken(new HashMap<>(), userDetails);
    }


    public String generateToken(
            Map<String, Object> extraClaims,
            UserDetails userDetails
    ) {
        return buildToken(extraClaims, userDetails, EXPIRATION_TIME);
    }


    private String buildToken(
            Map<String, Object> extraClaims,
            UserDetails userDetails,
            long expiration
    ) {
        return Jwts
                .builder()
                .setClaims(extraClaims)
                .setSubject(userDetails.getUsername())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + expiration))
                .signWith(getSignInKey(), SignatureAlgorithm.HS256)
                .compact();
    }
    public  String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    public  <T> T extractClaim(String token, Function<Claims, T>claimsResolver){
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }
    private Claims extractAllClaims(String token){
        return Jwts
                .parserBuilder()
                .setSigningKey(getSignInKey())
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    private Key getSignInKey() {
        byte[] keyBytes = Decoders.BASE64.decode(SECRET_KEY);
        return Keys.hmacShaKeyFor(keyBytes);
    }


    public  boolean validateToken(String token, UserDetails userDetails) {
     final  String username = extractUsername(token);
     return  (username.equals(userDetails.getUsername()) ) && !isTokenExpired(token);
    }

    private boolean isTokenExpired(String token) {

        return  extractExpiration(token).before(new Date());
    }

    private Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }
}
