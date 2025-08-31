import jwt from 'jsonwebtoken';

const KEY = '--MeCh@me--'

export function generateToken(userInfo) { 
  return jwt.sign(userInfo, KEY)
}

export function authentication(req, resp, next) {
  try {
    let token = req.headers["x-access-token"] || req.headers["authorization"] || req.query["x-access-token"];
    if (!token) return resp.status(401).send({ erro: "Token não informado" });

    req.user = jwt.verify(token, KEY);
    next();
  } catch {
    resp.status(401).send({ erro: "Token inválido ou expirado" });
  }
}

export function authenticate(req, resp, next) {
   return authentication(req, resp, next)
}