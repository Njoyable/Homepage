import csv

def read_csv(file_path):
    with open(file_path, 'r', newline='') as csvfile:
        csvreader = csv.reader(csvfile)
        data = list(csvreader)
    return data

def generate_html_table(data):
    html_table = "<table>\n"
    for row in data:
        html_table += "<tr>"
        for cell in row:
            html_table += f"<td>{cell}</td>"
        html_table += "</tr>\n"
    html_table += "</table>"
    return html_table

if __name__ == "__main__":
    csv_file_path = "ha_spots.csv"
    csv_data = read_csv(csv_file_path)
    html_table_content = generate_html_table(csv_data)

    # Save the HTML content to a file or use it as needed
    with open("output.html", "w") as html_file:
        html_file.write(html_table_content)
