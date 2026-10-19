import 'package:flutter/material.dart';
import '../models/reserva.dart';
import '../theme/app_theme.dart';

const _diasSemanaLongo = [
  'Luns',
  'Martes',
  'Mércores',
  'Xoves',
  'Venres',
  'Sábado',
  'Domingo'
];
const _meses = [
  'xaneiro',
  'febreiro',
  'marzo',
  'abril',
  'maio',
  'xuño',
  'xullo',
  'agosto',
  'setembro',
  'outubro',
  'novembro',
  'decembro'
];

String _formatarData(DateTime d) {
  final nomeDia = _diasSemanaLongo[(d.weekday - 1) % 7];
  final mes = _meses[d.month - 1];
  return '$nomeDia, ${d.day} de $mes';
}

/// Pantalla 3 — Confirmación da reserva + rexistro posposto do usuario.
/// O formulario só se amosa se non hai datos gardados previamente.
class ConfirmacionScreen extends StatefulWidget {
  final Reserva reserva;
  const ConfirmacionScreen({super.key, required this.reserva});

  @override
  State<ConfirmacionScreen> createState() => _ConfirmacionScreenState();
}

class _ConfirmacionScreenState extends State<ConfirmacionScreen> {
  final _formKey = GlobalKey<FormState>();
  final _nomeCtrl = TextEditingController();
  final _telefonoCtrl = TextEditingController();
  final _correoCtrl = TextEditingController();

  DatosUsuario? _usuarioGardado;
  bool _cargando = true;
  bool _enviando = false;
  bool _editarDatos = false;

  @override
  void initState() {
    super.initState();
    _cargarUsuario();
  }

  Future<void> _cargarUsuario() async {
    final datos = await UsuarioService.obterDatosGardados();
    setState(() {
      _usuarioGardado = datos;
      _cargando = false;
    });
  }

  @override
  void dispose() {
    _nomeCtrl.dispose();
    _telefonoCtrl.dispose();
    _correoCtrl.dispose();
    super.dispose();
  }

  bool get _precisaFormulario => _usuarioGardado == null || _editarDatos;

  Future<void> _confirmarReserva() async {
    if (_precisaFormulario) {
      if (!_formKey.currentState!.validate()) return;
      final novosDatos = DatosUsuario(
        nome: _nomeCtrl.text.trim(),
        telefono: _telefonoCtrl.text.trim(),
        correo: _correoCtrl.text.trim(),
      );
      await UsuarioService.gardarDatos(novosDatos);
      setState(() {
        _usuarioGardado = novosDatos;
        _editarDatos = false;
      });
    }

    setState(() => _enviando = true);
    // Aquí iría a chamada real á API do concello para crear a reserva.
    await Future.delayed(const Duration(milliseconds: 700));
    setState(() => _enviando = false);

    if (!mounted) return;
    _amosarExito();
  }

  void _amosarExito() {
    showDialog(
      context: context,
      barrierDismissible: false,
      builder: (context) => AlertDialog(
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(18)),
        icon: const Icon(Icons.check_circle, color: AppColors.dispoñibleTexto, size: 48),
        title: const Text('Reserva confirmada'),
        content: Text(
          'A túa reserva de ${widget.reserva.pista.nome} para o '
          '${_formatarData(widget.reserva.data)} ás ${widget.reserva.horaInicio} '
          'quedou rexistrada correctamente.',
          style: const TextStyle(fontSize: 17, height: 1.4),
        ),
        actions: [
          SizedBox(
            width: double.infinity,
            child: ElevatedButton(
              onPressed: () => Navigator.of(context)
                  .popUntil((route) => route.isFirst),
              child: const Text('Aceptar'),
            ),
          ),
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    if (_cargando) {
      return const Scaffold(
        body: Center(child: CircularProgressIndicator()),
      );
    }

    return Scaffold(
      appBar: AppBar(title: const Text('Confirmar reserva')),
      body: ListView(
        padding: const EdgeInsets.fromLTRB(20, 20, 20, 40),
        children: [
          _ResumoReserva(reserva: widget.reserva),
          const SizedBox(height: 28),
          if (_precisaFormulario) ...[
            Text('Os teus datos', style: Theme.of(context).textTheme.titleLarge),
            const SizedBox(height: 6),
            const Text(
              'Só cho preguntamos a primeira vez. A próxima reserva será aínda máis rápida.',
              style: TextStyle(fontSize: 15, color: AppColors.textoSecundario),
            ),
            const SizedBox(height: 16),
            Form(
              key: _formKey,
              child: Column(
                children: [
                  TextFormField(
                    controller: _nomeCtrl,
                    textCapitalization: TextCapitalization.words,
                    style: const TextStyle(fontSize: 18),
                    decoration: const InputDecoration(
                      labelText: 'Nome completo',
                      prefixIcon: Icon(Icons.person_outline),
                    ),
                    validator: (v) =>
                        (v == null || v.trim().isEmpty) ? 'Introduce o teu nome' : null,
                  ),
                  const SizedBox(height: 16),
                  TextFormField(
                    controller: _telefonoCtrl,
                    keyboardType: TextInputType.phone,
                    style: const TextStyle(fontSize: 18),
                    decoration: const InputDecoration(
                      labelText: 'Teléfono de contacto',
                      prefixIcon: Icon(Icons.phone_outlined),
                    ),
                    validator: (v) {
                      if (v == null || v.trim().isEmpty) return 'Introduce un teléfono';
                      if (v.trim().length < 9) return 'Teléfono incompleto';
                      return null;
                    },
                  ),
                  const SizedBox(height: 16),
                  TextFormField(
                    controller: _correoCtrl,
                    keyboardType: TextInputType.emailAddress,
                    style: const TextStyle(fontSize: 18),
                    decoration: const InputDecoration(
                      labelText: 'Correo electrónico',
                      prefixIcon: Icon(Icons.email_outlined),
                    ),
                    validator: (v) {
                      if (v == null || v.trim().isEmpty) return 'Introduce un correo';
                      if (!v.contains('@') || !v.contains('.')) return 'Correo non válido';
                      return null;
                    },
                  ),
                ],
              ),
            ),
          ] else ...[
            Card(
              child: Padding(
                padding: const EdgeInsets.all(16),
                child: Row(
                  children: [
                    const CircleAvatar(
                      radius: 24,
                      backgroundColor: AppColors.dispoñibleFondo,
                      child: Icon(Icons.person, color: AppColors.primario),
                    ),
                    const SizedBox(width: 14),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          const Text('Reservando como',
                              style: TextStyle(fontSize: 14, color: AppColors.textoSecundario)),
                          Text(
                            _usuarioGardado!.nome,
                            style: const TextStyle(fontSize: 18, fontWeight: FontWeight.w600),
                          ),
                        ],
                      ),
                    ),
                    TextButton(
                      onPressed: () {
                        setState(() {
                          _editarDatos = true;
                          _nomeCtrl.text = _usuarioGardado!.nome;
                          _telefonoCtrl.text = _usuarioGardado!.telefono;
                          _correoCtrl.text = _usuarioGardado!.correo;
                        });
                      },
                      child: const Text('Non es ti?'),
                    ),
                  ],
                ),
              ),
            ),
          ],
          const SizedBox(height: 28),
          ElevatedButton.icon(
            onPressed: _enviando ? null : _confirmarReserva,
            icon: _enviando
                ? const SizedBox(
                    width: 20,
                    height: 20,
                    child: CircularProgressIndicator(
                      strokeWidth: 2.5,
                      valueColor: AlwaysStoppedAnimation(Colors.white),
                    ),
                  )
                : const Icon(Icons.check_circle_outline),
            label: Text(_enviando ? 'Confirmando…' : 'Confirmar Reserva'),
          ),
        ],
      ),
    );
  }
}

class _ResumoReserva extends StatelessWidget {
  final Reserva reserva;
  const _ResumoReserva({required this.reserva});

  @override
  Widget build(BuildContext context) {
    return Card(
      margin: EdgeInsets.zero,
      child: Padding(
        padding: const EdgeInsets.all(18),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              children: [
                Container(
                  width: 52,
                  height: 52,
                  decoration: BoxDecoration(
                    color: AppColors.dispoñibleFondo,
                    borderRadius: BorderRadius.circular(12),
                  ),
                  child: Icon(reserva.pista.icona, color: AppColors.primario, size: 28),
                ),
                const SizedBox(width: 12),
                Expanded(
                  child: Text(
                    reserva.pista.nome,
                    style: Theme.of(context).textTheme.titleLarge,
                  ),
                ),
              ],
            ),
            const Divider(height: 28),
            _FilaResumo(icona: Icons.calendar_today, texto: _formatarData(reserva.data)),
            const SizedBox(height: 12),
            _FilaResumo(icona: Icons.access_time, texto: '${reserva.horaInicio} h'),
            const SizedBox(height: 12),
            _FilaResumo(icona: Icons.location_on_outlined, texto: reserva.pista.ubicacion),
          ],
        ),
      ),
    );
  }
}

class _FilaResumo extends StatelessWidget {
  final IconData icona;
  final String texto;
  const _FilaResumo({required this.icona, required this.texto});

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        Icon(icona, size: 20, color: AppColors.textoSecundario),
        const SizedBox(width: 10),
        Expanded(
          child: Text(texto, style: const TextStyle(fontSize: 17)),
        ),
      ],
    );
  }
}
