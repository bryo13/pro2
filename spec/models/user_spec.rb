require 'spec_helper'

describe User do 
    describe "user validity" do
        it "should be valid" do 
            @user = User.new(name:"",email:"")
        end
    end
end