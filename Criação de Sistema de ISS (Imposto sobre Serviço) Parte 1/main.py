import pandas as pd

class CadastroManager:
    def __init__(self):
        self.df = pd.DataFrame(columns=["Codigo_Municipio", "Data_Vigencia", "Codigo_Servico", "Descricao_Aliquota", "Percentual_Aliquota", "Data_Manutencao", "Hora_Manutencao", "Usuario_Manutencao"])

    def incluir_cadastro(self, codigo_municipio, data_vigencia, codigo_servico, descricao_aliquota, percentual_aliquota, data_manutencao, hora_manutencao, usuario_manutencao):
        nova_linha = pd.DataFrame({"Codigo_Municipio": [codigo_municipio],
                                   "Data_Vigencia": [data_vigencia],
                                   "Codigo_Servico": [codigo_servico],
                                   "Descricao_Aliquota": [descricao_aliquota],
                                   "Percentual_Aliquota": [percentual_aliquota],
                                   "Data_Manutencao": [data_manutencao],
                                   "Hora_Manutencao": [hora_manutencao],
                                   "Usuario_Manutencao": [usuario_manutencao]})
        self.df = pd.concat([self.df, nova_linha], ignore_index=True)

    def alterar_cadastro(self, indice, codigo_municipio, data_vigencia, codigo_servico, descricao_aliquota, percentual_aliquota, data_manutencao, hora_manutencao, usuario_manutencao):
        self.df.loc[indice] = [codigo_municipio, data_vigencia, codigo_servico, descricao_aliquota, percentual_aliquota, data_manutencao, hora_manutencao, usuario_manutencao]

    def excluir_cadastro(self, indice):
        try:
            self.df = self.df.drop(indice).reset_index(drop=True)
            print("Cadastro excluído com sucesso!")
        except KeyError:
            print("Índice inválido. Cadastro não encontrado.")

    def consultar_cadastro(self, codigo_municipio):
        return self.df[self.df["Codigo_Municipio"] == codigo_municipio]

    def listar_cadastros(self):
        return self.df

def imprimir_menu():
    print("\nMenu:")
    print("1 - Inserir Cadastro")
    print("2 - Alterar Cadastro")
    print("3 - Excluir Cadastro")
    print("4 - Consultar Cadastro")
    print("5 - Listar Todos os Cadastros")
    print("6 - Sair")

manager = CadastroManager()

while True:
    imprimir_menu()
    opcao = input("Escolha uma opção: ")

    if opcao == "1":
        while True:
            try:
                codigo_municipio = int(input("Digite o Código do Município: "))
                data_vigencia = int(input("Digite a Data de Vigência: "))
                codigo_servico = int(input("Digite o Código do Serviço: "))
                descricao_aliquota = input("Digite a Descrição da Alíquota: ")
                percentual_aliquota = float(input("Digite o Percentual da Alíquota: "))
                data_manutencao = int(input("Digite a Data de Manutenção: "))
                hora_manutencao = int(input("Digite a Hora de Manutenção: "))
                usuario_manutencao = input("Digite o Usuário de Manutenção: ")
                manager.incluir_cadastro(codigo_municipio, data_vigencia, codigo_servico, descricao_aliquota, percentual_aliquota, data_manutencao, hora_manutencao, usuario_manutencao)
                print("Cadastro inserido com sucesso!")
                break
            except ValueError:
                print("Por favor, insira um valor válido.")

    elif opcao == "2":
        while True:
            try:
                indice = int(input("Digite o código do município do cadastro que deseja alterar: "))
                codigo_municipio = int(input("Digite o novo Código do Município: "))
                data_vigencia = int(input("Digite a nova Data de Vigência: "))
                codigo_servico = int(input("Digite o novo Código do Serviço: "))
                descricao_aliquota = input("Digite a nova Descrição da Alíquota: ")
                percentual_aliquota = float(input("Digite o novo Percentual da Alíquota: "))
                data_manutencao = int(input("Digite a nova Data de Manutenção: "))
                hora_manutencao = int(input("Digite a nova Hora de Manutenção: "))
                usuario_manutencao = input("Digite o novo Usuário de Manutenção: ")
                manager.alterar_cadastro(indice, codigo_municipio, data_vigencia, codigo_servico, descricao_aliquota, percentual_aliquota, data_manutencao, hora_manutencao, usuario_manutencao)
                print("Cadastro alterado com sucesso!")
                break
            except ValueError:
                print("Por favor, insira um valor válido.")

    elif opcao == "3":
        while True:
            try:
                indice = int(input("Digite o índice do cadastro que deseja excluir: "))
                manager.excluir_cadastro(indice)
                break
            except ValueError:
                print("Por favor, insira um valor válido.")

    elif opcao == "4":
        while True:
            try:
                codigo_municipio = int(input("Digite o Código do Município para consultar: "))
                cadastros = manager.consultar_cadastro(codigo_municipio)
                if not cadastros.empty:
                    print(cadastros)
                else:
                    print("Nenhum cadastro encontrado para o código do município especificado.")
                break
            except ValueError:
                print("Por favor, insira um valor válido.")

    elif opcao == "5":
        cadastros = manager.listar_cadastros()
        if not cadastros.empty:
            print(cadastros)
        else:
            print("Nenhum cadastro encontrado.")

    elif opcao == "6":
        print("Saindo do programa...")
        break

    else:
        print("Opção inválida. Por favor, escolha uma opção válida.")
