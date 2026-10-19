import 'package:shared_preferences/shared_preferences.dart';
import 'pista.dart';

/// Datos dunha reserva en curso (data + hora + pista escollidas).
class Reserva {
  final Pista pista;
  final DateTime data;
  final String horaInicio; // p.ex. "10:00"

  Reserva({
    required this.pista,
    required this.data,
    required this.horaInicio,
  });
}

/// Datos persoais do usuario, gardados localmente unha soa vez.
class DatosUsuario {
  final String nome;
  final String telefono;
  final String correo;

  DatosUsuario({
    required this.nome,
    required this.telefono,
    required this.correo,
  });
}

/// Servizo sinxelo de persistencia local (rexistro posposto).
/// Unha vez que o usuario se rexistra, os seus datos gárdanse
/// no dispositivo e non se lle volven pedir.
class UsuarioService {
  static const _kNome = 'usuario_nome';
  static const _kTelefono = 'usuario_telefono';
  static const _kCorreo = 'usuario_correo';

  static Future<DatosUsuario?> obterDatosGardados() async {
    final prefs = await SharedPreferences.getInstance();
    final nome = prefs.getString(_kNome);
    final telefono = prefs.getString(_kTelefono);
    final correo = prefs.getString(_kCorreo);
    if (nome == null || telefono == null || correo == null) return null;
    return DatosUsuario(nome: nome, telefono: telefono, correo: correo);
  }

  static Future<void> gardarDatos(DatosUsuario datos) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(_kNome, datos.nome);
    await prefs.setString(_kTelefono, datos.telefono);
    await prefs.setString(_kCorreo, datos.correo);
  }

  static Future<void> borrarDatos() async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.remove(_kNome);
    await prefs.remove(_kTelefono);
    await prefs.remove(_kCorreo);
  }
}
