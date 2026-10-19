import 'package:flutter/material.dart';

/// Representa unha instalación deportiva municipal reservable.
class Pista {
  final String id;
  final String nome;
  final String deporte;
  final String ubicacion;
  final IconData icona;

  const Pista({
    required this.id,
    required this.nome,
    required this.deporte,
    required this.ubicacion,
    required this.icona,
  });
}

/// Datos de exemplo (mock). Nun proxecto real substituiríanse
/// por unha chamada á API do concello.
final List<Pista> pistasMock = [
  const Pista(
    id: 'padel-1',
    nome: 'Pista de Pádel 1',
    deporte: 'Pádel',
    ubicacion: 'Polideportivo Municipal — Zona Norte',
    icona: Icons.sports_tennis,
  ),
  const Pista(
    id: 'futbol7-1',
    nome: 'Campo de Fútbol 7',
    deporte: 'Fútbol 7',
    ubicacion: 'Campo Municipal A Ponte',
    icona: Icons.sports_soccer,
  ),
  const Pista(
    id: 'tenis-1',
    nome: 'Pista de Tenis 2',
    deporte: 'Tenis',
    ubicacion: 'Polideportivo Municipal — Zona Norte',
    icona: Icons.sports_tennis,
  ),
  const Pista(
    id: 'baloncesto-1',
    nome: 'Pista de Baloncesto',
    deporte: 'Baloncesto',
    ubicacion: 'Pavillón Municipal do Couto',
    icona: Icons.sports_basketball,
  ),
];
