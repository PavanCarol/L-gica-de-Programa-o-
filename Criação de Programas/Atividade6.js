import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
 
import java.io.IOException;
 
public class PersonData {
    public static void main(String[] args) {
        // Preencha os dados da pessoa
        String nome = "Fulano";
        String endereco = "Rua Teste, 123";
        String cep = "12345-678";
 
        // Validação do CEP usando a API ViaCEP
        OkHttpClient client = new OkHttpClient();
        Request request = new Request.Builder()
                .url("https://viacep.com.br/ws/" + cep + "/json/")
                .build();
 
        try {
            Response response = client.newCall(request).execute();
            if (response.isSuccessful()) {
                String responseData = response.body().string();
                System.out.println("CEP válido. Dados do endereço: " + responseData);
            } else {
                System.out.println("CEP inválido.");
            }
        } catch (IOException e) {
            System.err.println("Erro ao validar o CEP: " + e.getMessage());
        }
    }
}