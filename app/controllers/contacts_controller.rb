class ContactsController < ApplicationController
    def index
        puts "index called"
        users = Contact.all
        render component: "Contacts", props: { contacts: contacts }
      end
    
      def show
        user = Contact.find(params[:id])
        render component: "Contact", props: { contact: contact }
      end
    
      def new
        render component: "NewContact"
      end
    
      def create
        contact = Contact.new(contact_params)
        if contact.save
          #go back to index
          redirect_to contacts_path
        else
          #puts invalid input
        end
      end
    
      def edit
        contact = Contact.find(params[:id])
        render component: "EditContact", props: { contact: contact }
      end
    
      def update
        contact = Contact.find(params[:id])
        if contact.update(contact_params)
          redirect_to contacts_path
        else
          #handle invalid input here
        end
      end
    
      def destroy
        contact = Contact.find(params[:id]).delete
        redirect_to contacts_path
      end
    
      private
    
      def contact_params
        params.require(:contact).permit(:name, :age, :phone)
      end
end
