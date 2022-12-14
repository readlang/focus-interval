# Be sure to restart your server when you modify this file.

# This file contains settings for ActionController::ParamsWrapper which
# is enabled by default.

# Enable parameter wrapping for JSON. You can disable this by setting :format to an empty array.

# OLD VERSION:
# ActiveSupport.on_load(:action_controller) do
#   wrap_parameters format: [:json]
# end
ActiveSupport.on_load(:action_controller) do
  wrap_parameters format: []                  # this is meant to disable the wrap parameters
end

# To enable root element in JSON for ActiveRecord objects.
# ActiveSupport.on_load(:active_record) do
#   self.include_root_in_json = true
# end
