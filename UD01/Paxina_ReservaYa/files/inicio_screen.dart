import 'package:flutter/material.dart';
import '../models/pista.dart';
import '../theme/app_theme.dart';
import 'seleccion_data_hora_screen.dart';

/// Pantalla 1 — Inicio / Selección de pista.
/// Amosa unha lista grande e clara das instalacións dispoñibles.
class InicioScreen extends StatelessWidget {
  const InicioScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Padding(
          padding: EdgeInsets.only(top: 4),
          child: Text('Concello de Ourense'),
        ),
        bottom: PreferredSize(
          preferredSize: const Size.fromHeight(28),
          child: Padding(
            padding: const EdgeInsets.only(left: 16, bottom: 12),
            child: Align(
              alignment: Alignment.centerLeft,
              child: Text(
                'Instalacións Deportivas Municipais',
                style: TextStyle(
                  color: Colors.white.withValues(alpha: 0.9),
                  fontSize: 15,
                ),
              ),
            ),
          ),
        ),
      ),
      body: ListView(
        padding: const EdgeInsets.symmetric(vertical: 12),
        children: [
          Padding(
            padding: const EdgeInsets.fromLTRB(20, 8, 20, 12),
            child: Text(
              'Escolle unha instalación',
              style: Theme.of(context).textTheme.headlineMedium,
            ),
          ),
          for (final pista in pistasMock) _TarxetaPista(pista: pista),
          const SizedBox(height: 12),
        ],
      ),
    );
  }
}

class _TarxetaPista extends StatelessWidget {
  final Pista pista;
  const _TarxetaPista({required this.pista});

  void _reservar(BuildContext context) {
    Navigator.push(
      context,
      MaterialPageRoute(
        builder: (_) => SeleccionDataHoraScreen(pista: pista),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Card(
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              children: [
                Container(
                  width: 64,
                  height: 64,
                  decoration: BoxDecoration(
                    color: AppColors.dispoñibleFondo,
                    borderRadius: BorderRadius.circular(14),
                  ),
                  child: Icon(
                    pista.icona,
                    color: AppColors.primario,
                    size: 34,
                  ),
                ),
                const SizedBox(width: 14),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        pista.nome,
                        style: Theme.of(context).textTheme.titleLarge,
                      ),
                      const SizedBox(height: 4),
                      Row(
                        children: [
                          const Icon(Icons.location_on,
                              size: 16, color: AppColors.textoSecundario),
                          const SizedBox(width: 4),
                          Expanded(
                            child: Text(
                              pista.ubicacion,
                              style: Theme.of(context).textTheme.bodyMedium,
                              maxLines: 2,
                            ),
                          ),
                        ],
                      ),
                    ],
                  ),
                ),
              ],
            ),
            const SizedBox(height: 16),
            SizedBox(
              width: double.infinity,
              child: Semantics(
                button: true,
                label: 'Reservar ${pista.nome}, ${pista.deporte}',
                child: ElevatedButton.icon(
                  onPressed: () => _reservar(context),
                  icon: const Icon(Icons.calendar_today, size: 20),
                  label: const Text('Reservar'),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
