import 'package:flutter/material.dart';
import '../models/pista.dart';
import '../models/reserva.dart';
import '../theme/app_theme.dart';
import 'confirmacion_screen.dart';

/// Pantalla 2 — Selección de data e hora.
/// Selector horizontal de días + grella visual de franxas horarias.
class SeleccionDataHoraScreen extends StatefulWidget {
  final Pista pista;
  const SeleccionDataHoraScreen({super.key, required this.pista});

  @override
  State<SeleccionDataHoraScreen> createState() =>
      _SeleccionDataHoraScreenState();
}

class _SeleccionDataHoraScreenState extends State<SeleccionDataHoraScreen> {
  late final List<DateTime> _dias;
  late DateTime _diaSeleccionado;
  String? _horaSeleccionada;

  // Franxas horarias de exemplo (mock). "true" = ocupada.
  final Map<String, bool> _franxas = {
    '09:00': false,
    '10:00': true,
    '11:00': false,
    '12:00': false,
    '13:00': true,
    '17:00': false,
    '18:00': false,
    '19:00': true,
    '20:00': false,
  };

  static const _diasSemana = ['Lun', 'Mar', 'Mér', 'Xov', 'Ven', 'Sáb', 'Dom'];

  @override
  void initState() {
    super.initState();
    final hoxe = DateTime.now();
    _dias = List.generate(
      7,
      (i) => DateTime(hoxe.year, hoxe.month, hoxe.day + i),
    );
    _diaSeleccionado = _dias.first;
  }

  void _escollerDia(DateTime dia) {
    setState(() {
      _diaSeleccionado = dia;
      _horaSeleccionada = null; // ao cambiar de día, reinicia a hora
    });
  }

  void _escollerHora(String hora) {
    if (_franxas[hora] == true) return; // ocupada, non facer nada
    setState(() => _horaSeleccionada = hora);
  }

  void _continuar() {
    if (_horaSeleccionada == null) return;
    final reserva = Reserva(
      pista: widget.pista,
      data: _diaSeleccionado,
      horaInicio: _horaSeleccionada!,
    );
    Navigator.push(
      context,
      MaterialPageRoute(
        builder: (_) => ConfirmacionScreen(reserva: reserva),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final podeContinuar = _horaSeleccionada != null;

    return Scaffold(
      appBar: AppBar(title: Text(widget.pista.nome)),
      body: Column(
        children: [
          Expanded(
            child: ListView(
              padding: const EdgeInsets.only(top: 16, bottom: 8),
              children: [
                Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 20),
                  child: Text(
                    'Escolle o día',
                    style: Theme.of(context).textTheme.titleLarge,
                  ),
                ),
                const SizedBox(height: 12),
                _SelectorDias(
                  dias: _dias,
                  diaSeleccionado: _diaSeleccionado,
                  etiquetaSemana: _diasSemana,
                  onSeleccionar: _escollerDia,
                ),
                const SizedBox(height: 24),
                Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 20),
                  child: Text(
                    'Escolle a hora',
                    style: Theme.of(context).textTheme.titleLarge,
                  ),
                ),
                const SizedBox(height: 8),
                Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 20),
                  child: Row(
                    children: [
                      _LegendaCor(
                          cor: AppColors.dispoñibleFondo,
                          borde: AppColors.dispoñibleTexto,
                          texto: 'Dispoñible'),
                      const SizedBox(width: 16),
                      _LegendaCor(
                          cor: AppColors.ocupadoFondo,
                          borde: AppColors.ocupadoTexto,
                          texto: 'Ocupada'),
                    ],
                  ),
                ),
                const SizedBox(height: 12),
                Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 20),
                  child: GridView.count(
                    crossAxisCount: 3,
                    shrinkWrap: true,
                    physics: const NeverScrollableScrollPhysics(),
                    mainAxisSpacing: 12,
                    crossAxisSpacing: 12,
                    childAspectRatio: 1.5,
                    children: _franxas.entries
                        .map((e) => _FranxaHoraria(
                              hora: e.key,
                              ocupada: e.value,
                              seleccionada: _horaSeleccionada == e.key,
                              onTap: () => _escollerHora(e.key),
                            ))
                        .toList(),
                  ),
                ),
                const SizedBox(height: 90),
              ],
            ),
          ),
        ],
      ),
      bottomNavigationBar: SafeArea(
        child: Padding(
          padding: const EdgeInsets.fromLTRB(20, 12, 20, 16),
          child: ElevatedButton(
            onPressed: podeContinuar ? _continuar : null,
            style: ElevatedButton.styleFrom(
              backgroundColor:
                  podeContinuar ? AppColors.primario : const Color(0xFFC4C7C9),
              disabledBackgroundColor: const Color(0xFFC4C7C9),
              disabledForegroundColor: Colors.white,
            ),
            child: const Text('Continuar'),
          ),
        ),
      ),
    );
  }
}

class _SelectorDias extends StatelessWidget {
  final List<DateTime> dias;
  final DateTime diaSeleccionado;
  final List<String> etiquetaSemana;
  final ValueChanged<DateTime> onSeleccionar;

  const _SelectorDias({
    required this.dias,
    required this.diaSeleccionado,
    required this.etiquetaSemana,
    required this.onSeleccionar,
  });

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 84,
      child: ListView.separated(
        scrollDirection: Axis.horizontal,
        padding: const EdgeInsets.symmetric(horizontal: 20),
        itemCount: dias.length,
        separatorBuilder: (_, __) => const SizedBox(width: 10),
        itemBuilder: (context, i) {
          final dia = dias[i];
          final seleccionado = dia.year == diaSeleccionado.year &&
              dia.month == diaSeleccionado.month &&
              dia.day == diaSeleccionado.day;
          final nomeDia = etiquetaSemana[(dia.weekday - 1) % 7];

          return Semantics(
            button: true,
            selected: seleccionado,
            label: 'Día $nomeDia ${dia.day}',
            child: InkWell(
              onTap: () => onSeleccionar(dia),
              borderRadius: BorderRadius.circular(16),
              child: Container(
                width: 68,
                decoration: BoxDecoration(
                  color: seleccionado
                      ? AppColors.seleccionadoFondo
                      : AppColors.superficie,
                  borderRadius: BorderRadius.circular(16),
                  border: Border.all(
                    color: seleccionado
                        ? AppColors.primario
                        : const Color(0xFFDADCE0),
                    width: seleccionado ? 2 : 1,
                  ),
                ),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Text(
                      nomeDia,
                      style: TextStyle(
                        fontSize: 14,
                        fontWeight: FontWeight.w600,
                        color: seleccionado
                            ? Colors.white
                            : AppColors.textoSecundario,
                      ),
                    ),
                    const SizedBox(height: 4),
                    Text(
                      '${dia.day}',
                      style: TextStyle(
                        fontSize: 22,
                        fontWeight: FontWeight.w700,
                        color: seleccionado
                            ? Colors.white
                            : AppColors.textoPrincipal,
                      ),
                    ),
                  ],
                ),
              ),
            ),
          );
        },
      ),
    );
  }
}

class _FranxaHoraria extends StatelessWidget {
  final String hora;
  final bool ocupada;
  final bool seleccionada;
  final VoidCallback onTap;

  const _FranxaHoraria({
    required this.hora,
    required this.ocupada,
    required this.seleccionada,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    final Color fondo = seleccionada
        ? AppColors.seleccionadoFondo
        : ocupada
            ? AppColors.ocupadoFondo
            : AppColors.dispoñibleFondo;
    final Color texto = seleccionada
        ? AppColors.seleccionadoTexto
        : ocupada
            ? AppColors.ocupadoTexto
            : AppColors.dispoñibleTexto;

    return Semantics(
      button: true,
      enabled: !ocupada,
      label: ocupada ? 'Franxa das $hora, ocupada' : 'Franxa das $hora, dispoñible',
      child: Material(
        color: fondo,
        borderRadius: BorderRadius.circular(14),
        child: InkWell(
          onTap: ocupada ? null : onTap,
          borderRadius: BorderRadius.circular(14),
          child: Container(
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(14),
              border: Border.all(
                color: seleccionada ? AppColors.primarioEscuro : Colors.transparent,
                width: 2,
              ),
            ),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                if (ocupada)
                  Icon(Icons.lock, size: 16, color: texto)
                else if (seleccionada)
                  Icon(Icons.check_circle, size: 16, color: texto),
                const SizedBox(height: 2),
                Text(
                  hora,
                  style: TextStyle(
                    fontSize: 17,
                    fontWeight: FontWeight.w600,
                    color: texto,
                    decoration:
                        ocupada ? TextDecoration.lineThrough : TextDecoration.none,
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

class _LegendaCor extends StatelessWidget {
  final Color cor;
  final Color borde;
  final String texto;
  const _LegendaCor({required this.cor, required this.borde, required this.texto});

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisSize: MainAxisSize.min,
      children: [
        Container(
          width: 14,
          height: 14,
          decoration: BoxDecoration(
            color: cor,
            border: Border.all(color: borde),
            borderRadius: BorderRadius.circular(4),
          ),
        ),
        const SizedBox(width: 6),
        Text(texto, style: const TextStyle(fontSize: 14, color: AppColors.textoSecundario)),
      ],
    );
  }
}
