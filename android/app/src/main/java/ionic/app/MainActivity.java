package ionic.app;

import com.getcapacitor.BridgeActivity;
import android.Manifest;
import android.content.pm.PackageManager;
import android.os.Bundle; // Importación para Bundle
import androidx.annotation.NonNull; // Importación para NonNull
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;

public class MainActivity extends BridgeActivity {

    private static final int CAMERA_PERMISSION_REQUEST_CODE = 100;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // Verificar si ya se tiene el permiso de la cámara
        if (ContextCompat.checkSelfPermission(this, Manifest.permission.CAMERA) != PackageManager.PERMISSION_GRANTED) {
            // Si no se tiene el permiso, solicitarlo
            ActivityCompat.requestPermissions(this, new String[]{Manifest.permission.CAMERA}, CAMERA_PERMISSION_REQUEST_CODE);
        } else {
            // Si ya se tiene el permiso, puedes proceder a usar la cámara
            initializeCamera();
        }
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
        if (requestCode == CAMERA_PERMISSION_REQUEST_CODE) {
            if (grantResults.length > 0 && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                // Permiso concedido, puedes proceder a usar la cámara
                initializeCamera();
            } else {
                // Permiso denegado, puedes mostrar un mensaje al usuario o deshabilitar la funcionalidad de la cámara
                // Por ejemplo, mostrar un Toast o un diálogo explicando que la funcionalidad de la cámara no estará disponible
            }
        }
    }

    private void initializeCamera() {
        // Aquí puedes inicializar la cámara o realizar cualquier acción que requiera el permiso de la cámara
    }
}